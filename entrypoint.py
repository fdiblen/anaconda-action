#!/usr/bin/env python

import platform

print('::set-output name=python_version::{0}'.format(platform.python_version()))
