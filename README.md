# dialogflow and GPTJ2 Integration
API written using nodejs for GPTJ connection with Dialogflow.

## Steps to install on Windows:
1) If using anaconda use following command to install nodje and npm in ve
```
conda create -n nodejs-env nodejs 
```

2) Clone the following repo with all the dependencies:
```
git clone https://github.com/abuelgasimsaadeldin/dialogflow-gptj-banana.git  
```

3) Create .env file and place following: 
```
API_TOKEN=""
```

4) Install the dependencies:
```
npm install
```

5) Run the API:
```
node dialogflowgptj-banana.js
```

6) Use ngrok to make localhost public
```
ngrok http 3000
```
