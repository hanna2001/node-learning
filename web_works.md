//                    user 
// enters a website          html content of the server
//      |                           A
//      v                           |
//      DNS ------------------->  server <------------------ node/php/go
//      

node:
    - works on an EVENT LOOP -> which listens for requests
    - single threaded js
    - incoming data is based on streams
    - eventloop only handles callbacks that have fast finishing code
    - longer operations like operation in fs and others will be done by WORKER POOL -> has different threads
        - once a worker from worker pool completes the task -> callback -> eventloop
    - EVENT LOOP callback order:
        - Timer 
            - setTimeout
            - set Interval
        - Pending callback
            - file/ network etc
        - Poll:
            - new IO : tries to execute if possible or pushes to Pending of next iteration
        - Check
            - setImmediate
        - Close
        - Exits the process (event loop) ref=0

            ref increment for every new callback 
