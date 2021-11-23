## Floor API

| **Route** | **Action** | **Body** | **Method** |
| --- | --- | --- | --- |
| api/floors/ | Find all |
 | Get |
| api/floors/ | Create | {floor\_number : Intmax\_x\_coordinate : intmax\_y\_coordinate : int} | Post |
| api/floors/:id | Find one |
 | Get |
| api/floors/:id | Update | {floor\_number : Intmax\_x\_coordinate : intmax\_y\_coordinate : int} | Put |
| api/floors/:id | Delete |
 | Delete |
| api/floors/ | Delete all |
 | Delete |

##

## Sensor API

| **Route** | **Action** | **Body** | **Method** |
| --- | --- | --- | --- |
| api/sensors/ | Find all |
 | Get |
| api/sensors/ | Create | {floor\_id : Intx\_coordinate : inty\_coordinate : intflagged\_faulty : datetime} | Post |
| api/sensors/:id | Find one |
 | Get |
| api/sensors/:id | Update | {floor\_id : Intx\_coordinate : inty\_coordinate : intflagged\_faulty : datetime} | Put |
| api/sensors/:id | Delete |
 | Delete |
| api/sensors/ | Delete all |
 | Delete |

##

## Sensor-Log API

| **Route** | **Action** | **Body** | **Method** |
| --- | --- | --- | --- |
| api/sensors/ | Create | {sensor\_id : Inthumidity : doubletemperature : doubleup\_time : datetime} | Post |
