import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
	{
        id: '1',
        message: "Hello, how can I help you?",
        trigger: '2',
      },
      {
        id: '2',
        options: [
          { value: 1, label: "I don't feel good", trigger: '3' },
          { value: 2, label: "I want to search a medicine", trigger: '8' }
        ],
      },
      {
        id: '3',
        message: "What's wrong with you ?",
        trigger: '4',
      },
      {
        id: '4',
        options: [
            { value: 1, label: "Headache", trigger: '5' },
            { value: 2, label: "Stress", trigger: '5' },
            { value: 3, label: "Cancer", trigger: '11' }
          ],
      },{
        id: '5',
        message: "You should sleep for 10 hours a day!",
        trigger: '6'
      },
      {
        id: '6',
        options: [
            { value: 1, label: "Thank You"},
            { value: 2, label: "Thanks a Lot"},
            { value: 3, label:  "You are perfect!", trigger: 7 }
          ],
      },{
        id: '7',
        message: "No you are perfect!",
        end: true
      },
      {
        id: '8',
        message: "What is the name of the medicine?",
        trigger: '9'
      },
      {
        id: '9',
        user: true,
        trigger: '10'
      },
      {
        id: '10',
        message: "I'll search {previousValue} for you.",
        trigger: '6'
      },
      {
        id: '11',
        message: "Sorry to hear that. Please see a doctor.",
        end: true
      },
];

// Creating our own theme
const theme = {
	background: '#dde296',
	headerBgColor: '#0f7375',
	headerFontSize: '20px',
	botBubbleColor: '#95c3b3',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#FF5733',
	userFontColor: 'white',
};



function ChatBotForm() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<ChatBot

					// This appears as the header
					// text for the chat bot
					headerTitle="MediShare Chatbot"
					steps={steps}

				/>
			</ThemeProvider>
		</div>
	);
}

export default ChatBotForm;
