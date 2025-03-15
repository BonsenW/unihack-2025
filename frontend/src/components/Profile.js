import './Profile.css';

function Profile() {
  return (
    <div className='profile'>
        <div className='profile-left'>
            <img alt="Profile pic" />
            <button>Change Profile Picture</button>
        </div>
        <div className='profile-right'>
            <h1>Create Profile</h1>
            <p>Name</p>
            <input type="text" placeholder="Bonsen forgot your lastname" />
            <p>Age</p>
            <input type="number" placeholder="20" />
            <p>Location</p>
            <input type="text" placeholder="Clayton" />
            <p>Interests</p>
            <input type="text" placeholder="Cooking" />
            <p>Images</p>
            <input type="text" placeholder="" />

            <input type="submit" placeholder="Save" />
            
        </div>
    </div>
  );
}

export default Profile;
