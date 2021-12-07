## Floor API

| **Route** | **Action** | **Body**                                                             | **Method** |
| --- | --- |----------------------------------------------------------------------| --- |
| api/floors/ | Create | {floor_number : int, max_x_coordinate : int, max_y_coordinate : int} | Post |
| api/floors/:id | Update | {floor_number : int, max_x_coordinate : int, max_y_coordinate : int} | Put |
| api/floors/ | Find all |                                                                      | Get |
| api/floors/:id | Find one |                                                                      | Get |
| api/floors/:id | Delete |                                                                      | Delete |
| api/floors/ | Delete all |                                                                      | Delete |
