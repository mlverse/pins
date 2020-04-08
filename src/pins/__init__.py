import argparse
import sys
import os
import logging
import js2py

_logger = logging.getLogger(__name__)
_js2pyctx = False

def fib(n):
    assert n > 0
    a, b = 1, 1
    for i in range(n-1):
        a, b = b, a+b
    return a

def setup_logging(loglevel):
    logformat = "[%(asctime)s] %(levelname)s:%(name)s:%(message)s"
    logging.basicConfig(level=loglevel, stream=sys.stdout,
                        format=logformat, datefmt="%Y-%m-%d %H:%M:%S")

def pins_configure():
    setup_logging("INFO")
    _logger.debug("pins starting...")

    source = os.path.join(__path__[0], 'js', 'pins.js')
    _js2pyctx = js2py.eval_js('1 + 1')

pins_configure()