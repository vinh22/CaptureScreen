#!/bin/bash

echo ">>> Build with commit \"$1\""


git add .
git commit -a -m "$1
---"
git push

echo ">>> SUCCESS BUILD REMOTE"
