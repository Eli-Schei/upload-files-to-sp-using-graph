# UPLOAD FILES TO SHAREPOINT ONLINE WITH JAVASCRIPT - USING MSAL AND MICROSOFT GRAPH 
Example of how you can upload files to SharePoint using Microsoft Authentication Library and Microsoft Graph

## How to run the example

1. Clone the repository to your computer
2. In your CLI navigate inside the vue-app folder
3. Run 'npm install'
4. Update the [msal config](https://github.com/Eli-Schei/upload-files-to-sp-using-graph/blob/main/vue-app/src/authenticatingWithMsal.js) with your appId and tenantID.
5. Update the graph url in the [uploadingDocWithGraph.js](https://github.com/Eli-Schei/upload-files-to-sp-using-graph/blob/main/vue-app/src/uploadingDocWithGraph.js) file.
6. Run 'npm run dev'

> For more information about the code take a look at my blogposts:
> 
> <a href="https://elischei.com/upload-files-to-sharepoint-with-javascript-using-microsoft-graph/" target="_blank">Upload files to SharePoint with JavaScript using Microsoft Graph and Microsoft Authentication Library</a> 
> This blogpost describes the code related to authentication and uploading the file. It also shows you how to register your app and obtain your site-id - which you need to run the code. 
> 
> <a href="" target="_blank"></a>Update fields in SharePoint using graph. (coming soon). This blogpost describes how to update different field values in SharePoint using JavaScript and Microsoft Graph

Related repositories:
[Update fields in SharePoint using Microsoft Graph](https://github.com/Eli-Schei/update-fields-in-sp-using-graph)
