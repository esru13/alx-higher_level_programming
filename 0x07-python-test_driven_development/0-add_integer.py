#!/usr/bin/python3
"""
Module add-integer
Adds two integer together
"""


def add_integer(a, b=98):
    """a and b must be integers or floats,
        otherwise raise a TypeError
    """
    if type(b) is not int and type(b) is not float:
        raise TypeError("b must be an integer")
    if type(a) is not int and type(a) is not float:
        raise TypeError("a must be an integer")

    if type(b) is float:
        b = int(b)
    if type(a) is float:
        a = int(a)


    return a + b
