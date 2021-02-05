from flask import jsonify, request
from random import randint, sample
from json import load
from backend.webserver import app, name, version
from backend.webserver.filters import filter_map

data_folder = 'data'
master = load(open(f'{data_folder}/master.json'))
pets = master['count']

@app.route('/')
def index():
    return jsonify(name=name, version=version)

@app.route('/pet')
def get_random_pet():
    try:
        id = request.args['id']
        if id in master['map']:
            data = load(open(f'{data_folder}/data_{master["map"][id]}.json'))
            return jsonify(filter_map(data, id))
        else:
            return jsonify({ 'error' : 'Not Found' }), 404
    except:
        pass
    selection = randint(0, pets - 1)
    data = load(open(f'{data_folder}/data_{str(selection)}.json'))
    return jsonify(sample(data, 1)[0])


@app.route('/pets')
def get_random_pets():
    count = 5
    try:
        count = int(request.args['count'])
    except:
        pass
    selection = randint(0, pets - 1)
    data = load(open(f'{data_folder}/data_{str(selection)}.json'))
    return jsonify(sample(data, count))