### Deployed public link --> https://amazon-clone-nextjs-taupe.vercel.app/

### By going above link we can get 2 types of errors (inside of Chrome)

(1) Deceptive site ahead

(2) Session timeout

these errors are happening because of browser

#### To fix the above error for checking the full app --> 
go to chrome://settings/security
then, turn the settings from Standard protection to No protection (not recommended)

Note: Chrome (or other browsers if it's error) is giving these eroors cause Google is restricted about the unregistered websites who take personal information like **Card-details.
In this app we're giving dummy data (42424242......... ) as card-details to test the payment in Stripe checkout-section. So, after Chrome's settings changed we can test the app using the dummy data for card details like: 42424242........


## Run the Project Locally



### Using npm

Run commands

1) ```npm install```


2) ```npm run dev```


### Or using yarn

Run commands 

1) ```npm install --global yarn```

2) ```yarn install```

3) ```yarn run dev```


#### note: we have to create firebase-app, firebase config connection & firestore database to get the app's database working with localhost...
