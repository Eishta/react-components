#### Features: 
1. type : error, success , primary, secondary
2. message : message to show in error and success message
3. children : elements containing the content to displayed => if not present show the message
4. hanldeClose : function to close the alertbox 

This will show the children
```bash 
<Alert type="success"> <p> Success Message </p></Alert>
```

Will show the message
```bash 
<Alert type="success" message="Success Message" /> 
```