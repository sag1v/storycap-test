#!/bin/bash
  rm -rf integration/__screenshots__/* &&
  rm -rf integration/__screenshots__diff/* &&
  storycap --serverCmd "http-server storybook-static -p 9009" --outDir "integration/__screenshots__" --parallel 4 http://localhost:9009 #change to --parallel 1 to see how tests fail
