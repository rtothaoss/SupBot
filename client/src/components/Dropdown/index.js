import React from 'react'





export function ShirtDropdown(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="sel1">Size (select one):</label>
        <select {...props} className="form-control" id="sel1">
          <option >Pick a size</option>
          <option value='Small'>Small</option>
          <option value='Medium'>Medium</option>
          <option value='Large'>Large</option>
          <option value='X-Large'>X-Large</option>
        </select>
      </div>
    </form>
  )
}


export function PantsizeDropdown(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="sel1">Size (select one):</label>
        <select {...props} className="form-control" id="sel2">
          <option >Pick a size</option>
          <option value='30'>30</option>
          <option value='32'>32</option>
          <option value='34'>34</option>
          <option value='36'>36</option>
        </select>
      </div>
    </form>
  )
}


export function ShoeDropdown(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="sel1">Size (select one):</label>
        <select {...props} className="form-control" id="sel3">
          <option >Pick a size</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
          <option value='11'>11</option>
          <option value='12'>12</option>
        </select>
      </div>
    </form>
  )
}



