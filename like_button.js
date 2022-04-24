

function Sorting() {
        return (<div>
            <label className="fa fa-sort" htmlFor="sortval"></label>
          <select name="sortval" id="sortval" onChange={checkSort}>
              <option value="desc">newest first</option>
           <option value="asen">oldest first</option>
            
          </select>
        </div>);
      }
 
function Filtering(){
    return (  <div>
            <i className='fa fa-filter'></i>
            
          <select name="filterval" id="filterval" onChange={filter}>
        <option >Select Filter</option>
             
      <option value="Year" >Year</option>
    <option value="Month">Month</option>
    <option value="Week">Week</option>
    <option value="none">clear Filters</option>
            
          </select>
        </div>);
}



const domContainer2 = document.querySelector('#sort-react');
const domContainer = document.querySelector('#filter-react');
ReactDOM.render(<Filtering/>, domContainer);
ReactDOM.render(<Sorting />, domContainer2)

checkSort()

function save(pid,text){
    console.log(pid+"___"+text)
    //if(idexist(parseInt(pid)))
        console.log("working")
        db.collection("allNotes").doc({id:parseInt(pid)}).update({
            body:text,
        date:new Date().toLocaleString(). replace(","," "),
        datems:new Date().getTime()
        
        })
}



