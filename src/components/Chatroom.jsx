import React from "react";
import Talk from "talkjs";

export default class Chatroom extends React.Component {
  constructor(props) {
    super(props);
    this.talkjsContainer = React.createRef();
  }
  componentDidMount() {
    
    Talk.ready.then(() => {
      var me = new Talk.User({
        id: 1001,
        name: "Alice",
        email: "demo@talkjs.com",
        photoUrl: "https://demo.talkjs.com/img/alice.jpg",
        welcomeMessage: "Hey there! How are you? :-)",
        role: "default"
      });

      window.talkSession = new Talk.Session({
        appId: "tsGSO0Vc",
        me: me
      });

      var other = new Talk.User({
        id: 1002,
        name: "Sebastian",
        email: "demo@talkjs.com",
        photoUrl: "https://demo.talkjs.com/img/sebastian.jpg",
        welcomeMessage: "Hey, how can I help?",
        role: "default"
      });

      var other1 = new Talk.User({
        id: 1003,
        name: "Umang",
        email: "demo@talkjs.com",
        photoUrl: "https://demo.talkjs.com/img/sebastian.jpg",
        welcomeMessage: "Hey, how can I help?",
        role: "default"
      });

      var conversation = window.talkSession.getOrCreateConversation(
        Talk.oneOnOneId(me, other)
      );
      conversation.setParticipant(me);
      conversation.setParticipant(other);
      conversation.setParticipant(other1);

      var inbox = window.talkSession.createInbox({ selected: conversation });
      inbox.mount(this.talkjsContainer.current);
    });
    
  }
  render() {
    return <div ref={this.talkjsContainer} style={{width: 500, height:400}} />;
  }
}
