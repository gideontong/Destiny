from backend.webserver import app as webservice
from sys import version_info

MIN_VERSION = (3, 7)
assert version_info >= MIN_VERSION, f'requires Python {".".join([str(n) for n in MIN_VERSION])} or newer'

