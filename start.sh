pkill -f tmux

echo Starting Services
tmux -c 'cd /root/app/BackEndPaSolucoes && npm start &\
    cd /root/app/FrontEndPaSolucoes && npm start '

echo Services started