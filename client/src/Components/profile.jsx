import React, { useState } from 'react';
import { auth, db } from '../firebase-config';
import { query ,collection,where, getDocs, doc, getDoc} from 'firebase/firestore';
const Profile = () => {
  const [teacher,setTeacher]=useState('');
if(auth?.currentUser){
  const id=auth?.currentUser?.email;
  
  const q = query(collection(db, "teachers1"), where("email", "==", id));
  console.log(q);
  // const func=async()=>{
  //   const data1=await getDocs(doc(db,'teachers1',q));
  //   console.log('data1',data1);
  // }
  // func();
  // console.log(id);
  const func=async()=>{
  const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  setTeacher(doc.data())
});
}
func();
}

  return (
    <div class="userProfile">

    <div class="card mb-2">
        <div class="card-body text-center">
            <img src="/" alt="avatar"
                class="rounded-circle img-fluid" />
            {/* <h5 class="my-3">Mr. Rohan</h5> */}
            <p class="text-muted mb-1 ">{teacher.firstName}</p>
            <p class="text-muted mb-1">{teacher.secName}</p>
            <p class="text-muted mb-4">{teacher.email}</p>
            <div class="d-flex justify-content-center mb-2">

                {/* <button type="button" class="btn btn-primary">Follow</button>
                <button type="button" class="btn btn-outline-primary ms-1">Message</button> */}
            </div>
        </div>
        <div class="container-flex">
<div className="row gy-5">
<button type="button" class="btn btn-primary  ">Add new Student</button>
</div>
<div className="row gy-5">
<button type="button" class="btn btn-primary">Update</button>
</div>
</div>
    </div>
</div>

  );
};

export default Profile;