if(Meteor.isClient){
  Template.markdown.events({
    "keyup textarea": function(e, tmpl){
      Session.set("markdown", tmpl.firstNode.value);
    }
  });

  Template.rendered.helpers({
    markdownText: function(){
      return Session.get('markdown') || "";
    }
  });
}
