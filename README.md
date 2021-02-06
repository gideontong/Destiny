# Destiny

Many of us live alone and wander through life. Enter Destiny. Destiny matches you to a pet and a passion to help you devote yourself to caring for another living thing and refine a craft to call your own. Our focus is increasing pet adoption in the California area and swapping idle hands for joyous memories.

![Devpost Banner](https://i.imgur.com/a9KGWre.png)

## Getting Started

First clone the repository:

```bash
git pull https://github.com/gideontong/Destiny.git
```

### Backend

Requires Python 3.7+ to be installed on PATH.

```bash
pip3 install -r requirements.txt
python3 app.py
```

### Frontend

Requires Node 12+ to be installed on PATH.

```bash
npm install
npm start
```

## Building for Deployment

Please use a production server to serve the frontend and backend (separately). Your use of a reverse proxy, secure authentication, or SSL is up to you.

### Backend Deployment

This example assumes you are using gunicorn as your backend server.

```bash
gunicorn app:webservice
```

You can also alternatively build the Python package into a Wheel and use

```python
webservice.run()
```

as an entry point.

### Frontend Deployment

```bash
cd destiny-app
npm run build
```

Your build is now in `destiny-app/build`. Eject your build and deploy to a cloud service like Firebase, Google Cloud, AWS, or another cloud deployment tool. Alternatively, build a static server or use a dynamic service like Express.

## The Path

There are two steps to fulfilling your destiny:

- [ ] Pet
- [ ] Passion

## The Pet

We have sourced over 60,000 pets available for adoption in California to aid you in giving one a forever home.

## The Passion

Our list of passions span topics from Well-being to Relationships.

## Tech Stack

Our frontend is constructed with React and the backend with the Flask framework. Our data comes as the result of web scraping using Python.
