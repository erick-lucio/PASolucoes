#!/bin/bash
tmux new-session -d -s my_session 'cd /root/app/BackEndPaSolucoes && npm start &\
    cd /root/app/FrontEndPaSolucoes && npm start'