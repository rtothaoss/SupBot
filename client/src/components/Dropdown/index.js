import React from 'react'


const Dropdown = () => {
    return (
        <form>
        <div class="form-group">
          <label for="sel1">Size (select one):</label>
          <select class="form-control" id="sel1">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>X-Large</option>
          </select>
          </div>
          </form>
        )

}


export default Dropdown