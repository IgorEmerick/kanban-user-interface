# Kanban User Interface
A user interface to kanban-board back-end application.

## Features
### User
- [x] Create user by name, email and password.

- Update user.
  - [ ] Should request authentication.
  - [ ] Should request old password.
  - [ ] Should be able to update all user properties.

- [x] Authenticate user by email and password.

### Board
- Create a board by name and owner id.
  - [ ] Should request authentication.
  - [ ] Should not create a board to an owner that does not exists.
  - [ ] Should not exists two boards with same name and owner id.
  - [ ] The board should be created with a default stage.

- Create stage by stage name and board id.
  - [ ] Should request authentication.
  - [ ] Should not create a stage into a board that does not exists.
  - [ ] Should not create a stage if request user isn't board admin.
  - [ ] Should not exists two stages with same name on the same board.

- Create card by title and stage id.
  - [ ] Should request authentication.
  - [ ] Should not create a card into a stage that does not exists.
  - [ ] Should not create a card if user isn't into board members list.
  - [ ] Should not exists two cards with same title in same board.

- List boards by member id.
  - [ ] Should request authentication.

- Get board, with members, stages and cards, by id.
  - [ ] Should request authentication.
  - [ ] Should not return a board tha does not exists.
  - [ ] Should not return a board if user isn't into members list.