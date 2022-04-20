

const userProfile = () => {

  return <div>{userData.userEmail}</div>;
};

export default userProfile;

// clicking on random user profile flow

// user [id]

// get data from specific user

// is business?

// renders view component with business profile(basic info, hiring projects) : renders view freelancer profile component (basic info, portfolio)

// clicking on YOUR profile

// get basic user data from auth,

// is business?

// render CRUD component with business view : render freelancer view

// if auth.uid === URL[id] {
//   isBusiness ? <MyBusinessProfile /> : <MyFreelancerProfile />

// } else{
//   isBusiness ? <RandomBusinessProfile /> : <RandomFreelancerProfile />}
