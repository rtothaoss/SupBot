import React from 'react'





export function ShirtDropdown(props){
    return (
        <form>
        <div className="form-group">
          <label htmlFor="sel1">Size (select one):</label>
          <select className="form-control" id="sel1">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>X-Large</option>
          </select>
          </div>
          </form>
        )
}


export function PantsizeDropdown(props){
  return (
      <form>
      <div className="form-group">
        <label htmlFor="sel1">Size (select one):</label>
        <select className="form-control" id="sel1">
          <option>30</option>
          <option>32</option>
          <option>34</option>
          <option>36</option>
        </select>
        </div>
        </form>
      )
}


export function ShoeDropdown(props){
  return (
      <form>
      <div className="form-group">
        <label htmlFor="sel1">Size (select one):</label>
        <select className="form-control" id="sel1">
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
        </div>
        </form>
      )
}



