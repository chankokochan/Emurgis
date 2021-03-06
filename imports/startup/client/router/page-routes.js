import { FlowRouter } from "meteor/kadira:flow-router"
import { BlazeLayout } from "meteor/kadira:blaze-layout"

import "/imports/ui/pages/frontpage/frontpage.js"
import "/imports/ui/pages/about/about.js"

// ***************************************************************
// Static pages
// ***************************************************************

// FRONTPAGE
// -------------------------------------------------------


// ABOUT
// -------------------------------------------------------
FlowRouter.route("/about", {
  action: function() {
    BlazeLayout.render("layout", {
      header: "header",
      main: "about",
      footer: "footer"
    })
  },
  name: "about"
})
