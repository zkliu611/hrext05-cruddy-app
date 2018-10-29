### Cruddy App Todo

#### Basic Improvments (requirements)

- [ ] create indivdiual items
- [ ] delete individual items
- [ ] edit individual items

Create a website for inventory check list. 
- Checklist inputs = Item Name, SKU #, Quantity, Department, Date Received, etc
- Table to display items currectly in inventory. 
- Button to edit or delete item from inventory. 

##### Notes
- [ ] Keep DOM and localStorage matching 
- [ ] Remember event Delegation when adding new items to .show-text
- [ ] make sure we do not duplicate data
- [ ] add different values to the item

  ex.
```javascript
 item =  {
  id: "thing used for key",
  text-value: "some text",
  categories: [ 'cat1', 'cat2' ],
  isComplete: boolean,
  dateCreated: dateCreated,
  dateCompleted: dateCompleted
  ...
  etc
  }
```

#### Potential Libraries
- [ ] lodash/underscore
- [ ] jquery ui
- [ ] bootstrap/material (css library)

#### My Spin
- using jquery UI (*current ideas, subject to change)
 - implement date picker for data entry 
 - implement radio button for department selection 
 - implement tooltip for each entry (ie, where the SKU is located)
 - add select menu to filter inventory by department
 - use a dialog box for data input
- CSS customization
 - explore ways to customized website with CSS

 #### Schedule
 Day 1 - Outline plan, explore jquery UI website (or any other related potential libraries) for ideas on my spin. 
 Day 2 - Develop basic site, implement create/read/edit/delete functionalities, start applying jquery UI.
 Day 3 - Finish implementing my spins using jquery UI, must have fully functional site by end of day.
 Day 4 - Work on CSS improvements, complete final product by end of day. 
 Day 5 - Prepare for presenation. Celebrate hard work after!

 


