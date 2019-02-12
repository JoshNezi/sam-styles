module.exports = {
	title: "Message",
  status: "wip",
  collated: true,
	variants: [
		{
			"name": "default",
      "label": "Normal",
      "context": {
        "classes": "",
        "message": "Message here",
      }
    },
    {
      "name": "error",
      "context": {
        "classes": "error",
        "icon": "fas fa-exclamation-circle text-error",
        "message": "Error message here",
      }
    },
	]
};