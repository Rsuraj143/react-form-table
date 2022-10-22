import React,{useState} from 'react'
import { useFormik } from 'formik'
export default function Validation() {
  const [details, setdetails] = useState()
  const formik=useFormik({
    initialValues:{
      Name:"",
      Email:"",
      Password:"",
      City:"",
      State:"",
      Date:"",
      Age:"",
      Address:"",
      Photo:"",
      Color:"",
      Status:""
    },
    onSubmit:values=>{
      alert(JSON.stringify(values))
    }
  })
  let states=["Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    ]

  return (
    <div className='container'>
      <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>Name</dt>
          <dd><input name="Name" onChange={formik.handleChange} value={formik.values.Name}type="text"/></dd>
        </dl>
        <dl>
          <dt>Email</dt>
          <dd><input name="Email" onChange={formik.handleChange} value={formik.values.Name}type="email"/></dd>
        </dl>
        <dl>
          <dt>Password</dt>
          <dd><input name="Password" onChange={formik.handleChange} value={formik.values.Password}type="password"/></dd>
        </dl>
        <dl>
          <dt>City</dt>
          <dd>
          <select name="City" onChange={formik.handleChange} value={formik.values.City}>
            <option>Hyderabad</option>
            <option>Delhi</option>
            <option>Bangalore</option>
          </select>
          </dd>
        </dl>
        <dl>
          <dt>State</dt>
          <dd>
            <select name="State" onChange={formik.handleChange} value={formik.values.State}>
            {states.map((option) => (
            <option key={option}>
              {option}
            </option>
            ))}
            </select>
          </dd>
          <dt>DOB</dt>
          <dt><input type="date" name="Date" onChange={formik.handleChange} value={formik.values.Date}/></dt>
          <dt>Age</dt>
          <dt><input id="age" type="range" min="0" max="70" name="Age" onChange={formik.handleChange} value={formik.values.Age}/></dt>
          <dt>Address</dt>
          <dd><textarea></textarea></dd>
          <dt>Upload Photo</dt>
          <dd><input id="file" type="file" accept='.jpg,.jpeg,.png'name="Photo" onChange={formik.handleChange} value={formik.values.Photo}/></dd>
          <dt>Favourite color</dt>
          <dd><input id="color" type="color" name="Color" onChange={formik.handleChange} value={formik.values.Color} /></dd>
          <dt>Status</dt>
          <dd>
          <div class="form-check form-switch">
          <input class="form-check-input" name="Status" onChange={formik.handleChange} value={formik.values.Status}type="checkbox" role="switch" id="status"/>
          <label class="form-check-label" for="status">Inactive</label>
          </div>
          </dd>
          <button className='btn btn-danger'>Submit</button>
        </dl>
      </form>
    </div>
  )
}