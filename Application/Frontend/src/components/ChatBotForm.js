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
          { value: 2, label: "I want to search a medicine", trigger: '4' }
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
            { value: 3, label: "Cancer", trigger: '5' }
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
            { value: 3, label:  "You are perfect!" }
          ],
      },
];

// Creating our own theme
const theme = {
	background: '#C9FF8F',
	headerBgColor: '#197B22',
	headerFontSize: '20px',
	botBubbleColor: '#0F3789',
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
