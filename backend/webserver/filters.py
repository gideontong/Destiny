def filter_map(data: list, id: str) -> dict:
    for item in data:
        if id == str(item['animal']['id']):
            return item