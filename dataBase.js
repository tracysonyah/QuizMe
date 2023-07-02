const quizData = [
    {
        course: "course 1", 
        questions: [
            {
                question: "What year was Apple founded?",
                options: ['1974', '1976', '1980', '1984'],
                answer:'1976'
            },

            {
                question: 'When was Amazon founded?',
                options: ['1995', '1998', '2001', '2004'],
                answer: '1995'
            },

            {
                question: 'When one was Facebook founded?',
                options: ['2001', '2003', '2005', '2007'],
                answer: '2003'
            },

            {
                question: 'When was Google founded?',
                options: ['1995', '1998', '2001', '2004'],
                answer: '1998'
            },

            {
                question: 'In which year was Netflix founded?',
                options: ['1995', '1997', '2000', '2002'],
                answer: '1997'
            },

            {
                question: 'The web browser developed by Google is?',
                options: ['Safari', 'Firefox', 'Chrome', 'Edge'],
                answer: 'Chrome'
            },
            
            {
                question: 'What was the original business model of Netflix??',
                options: ['Online shopping', 'Social networking', 'DVD rental by mail', 'Video game Streaming'],
                answer: 'DVD rental by mail'
            },
            
            {
                question: 'Which social media platform did Facebook acquire in 2012?',
                options: ['Twitter', 'Snapchat', 'Instagram', 'LinkedIn'],
                answer: 'Instagram'
            },
            
            {
                question: 'The name of Amazon e-reader device?',
                options: ['Kindle', 'Fire Tablet', 'Echo Dot', 'Fire TV Stick'],
                answer: 'Kindle'
            },
            
            {
                question: 'The name of Apple storage cloud service?',
                options: ['iCloud', 'Apple Drive', 'iStorage', 'Apple Cloud'],
                answer: 'iCloud'
            },
            
            {
                question: 'Apple became the first two-trillion-dollar publicly traded company?',
                options: ['2016', '2017', '2018', '2019'],
                answer: '2018'
            },
                
            {
                question: 'What is the market capitalization of Apple as of september 2021?',
                options: ['$500 billion', '$1 trillion', '$2 trillion', '$5 trillion'],
                answer: '$2 trillion'
            },
            
            {
                question: 'Which famous investor is known for his large holdings of Apple stock?',
                options: ['Warren Buffet', 'Elon Musk', 'Jeff Bezos', 'Mark Zukerberg'],
                answer: 'Warren Buffet'
            },
            
            {
                question: 'Who is the co-founder of Apple along with Steve Jobs?',
                options: ['Tim Cook', 'Bill Gates', 'Steve Wozniak', 'Mark Zukerberg'],
                answer: 'Steve Wozniak'
            },
            
            {
                question: 'Who is the current CEO of Apple?',
                options: ['Tim Cook', 'Jeff Bezos', 'Sundar Pichai', 'Elon Musk'],
                answer: 'Tim Cook'
            },
            
            {
                question: 'Who is the current CEO of Microsoft?',
                options: ['Steve Ballmer', 'Bill Gates', 'Tim Berners-Lee', 'Satya Nadella'],
                answer: 'Staya Nadella'
            },
            
            {
                question: 'The programming console widely used for Windows development?',
                options: ['Python', 'Java', 'C#', 'Ruby'],
                answer: 'C#'
            },
            
            {
                question: 'What year was Microsoft founded?',
                options: ['1975', '1980', '1985', '1990'],
                answer: '1975'
            },
            
            {
                question: 'Which gaming console is developed by Microsoft?',
                options: ['PlayStation', 'Xbox', 'Nintendo Switch', 'GameCube'],
                answer: 'Xbox'
            },
            
            {
                question: 'The name of Microsoft cloud computing platform is?',
                options: ['SharePoint', 'OneDrive', 'Microsoft Azure', 'Microsoft 365'],
                answer: 'Microsoft Azure'
            },
            
            {
                question: 'Who was the CEO of Microsoft before Staya Nadella?',
                options: ['Steve Ballmer', 'Bill Gates', 'Tim Cook', 'Jeff Bezos'],
                answer: 'Steve Ballmer'
            },
            
            {
                question: 'Apple programming language for iOS and macOS app development?',
                options: ['Swift', 'Object-C', 'Python', 'Ruby'],
                answer: 'Swift'
            },
            
            {
                question: 'The web browser developed by Apple is?',
                options: ['Safari', 'Firefox', 'Chrome', 'Edge'],
                answer: 'Safari'
            },
            
            {
                question: 'Which programming language was developed by Google?',
                options: ['Go', 'Java', 'python', 'C++'],
                answer: 'Go'
            },
            
            {
                question: 'What is the name of Google Cloud storage service?',
                options: ['iCloud', 'OneDrive', 'Dropbox', 'Google Drive'],
                answer: 'Google Drive'
            },
            
            {
                question: 'What is the name of Facebook cryptocurrency project?',
                options: ['Libra', 'Bitcoin', 'Ethereum', 'Ripple'],
                answer: 'Libra'
            },
            
            {
                question: 'Who is the co-founder of Facebook along with Mark Zukerberg?',
                options: ['Jack Dorsey', 'Evan Spiegel', 'Chris Hughes', 'Dustin Moskovitz'],
                answer: 'Dustin Moskovitz'
            },
            
            {
                question: 'What is the name of Amazon virtual assistant?',
                options: ['Siri', 'Cortana', 'Alexa', 'Google Assistant'],
                answer: 'Alexa'
            },
            
            {
                question: 'In which city is Amazon headquarters located?',
                options: ['Seattle, Washington', 'San Francisco, California', 'New York City, New York'],
                answer: 'Seattle, Washington'
            },
            
            {
                question: 'Who is the CEO of Netflix?',
                options: ['Reed Hastings', 'Tim Cook', 'Jeff Bezos', 'Mark Zukerberg'],
                answer: 'Reed Hastings'
            },
            
            {
                question: 'The CEO Tracy loves the most amongst these select few?',
                options: ['Mark Zukerberg', 'Sundar Pichai', 'Bill Gates', 'Tim Cook'],
                answer: 'Sundar Pichai'
            },
            


        ]
    },

    {
        Course: "Course 2",
        questions: [
            {
                question: 'Which of the following is a key feature of Emerald?',
                options: ['Dynamic typing', 'Single-threaded execution', 'Lack of exception handing', 'Support for concurrency'],
                answer: 'Support for concurrency'
            },
            
            {
                question: 'How does Emerald handle concurrency?',
                options: ['Manual memory allocation and deallocation', 'Automatic garbage collection', 'Using pointers and references', 'By limiting the memory usage'],
                answer: 'Automatic garbage collection'
            },
            
            {
                question: 'What is Emerald?',
                options: ['A gemstone', 'A video game', 'A programming language', 'A movie'],
                answer: 'A programming language'
            },
            
            {
                question: 'Who developed Emerald?',
                options: ['Google', 'Microsoft', 'University of Washington', 'Apple'],
                answer: 'University of Washington'
            },
            
            {
                question: 'How are classes defined in Emerald?',
                options: ['Using the def keyword', 'Using the class keyword', 'Using the struct keyword', 'Using the new keyword'],
                answer: 'Using the class keyword'
            },
            
            {
                question: 'What does Emerald use for inter-object communication?',
                options: ['TCP/IP protocol', 'Remote procedure calls(RPC', 'Message passing', 'Shared memory'],
                answer: 'Message passing' 

            },

            {
                question: 'The syntax for creating a new object in Emerald??',
                options: ['create ObjectName', 'new ObjectName', 'ObjectName.create()', 'ObjectName.new()'],
                answer: 'ObjectName.create()'

            },

            {
                question: 'Which of the following is correct?',
                options: ['Emerald uses a static type system', 'Emerald uses a dynamic type system', 'Emerald supports both static n dynamic typing', 'Emerald doesnt have a type system'],
                answer: 'Emerald supports both static n dynamic typing'
            }
        ]
    },

    {
        Course: "Course 3",
        questions: [
            {
                question: '',
                options: [''],
                answer: ''
            },


            {
                question: '',
                options: ['', '', '', ''],
                answer: ''
            },
    
            {
                question: '',
                options: ['', '', '', ''],
                answer: ''
            },
    
            {
                question: '',
                options: ['', '', '', ''],
                answer: ''
            },
    
            {
                question: '',
                options: ['', '', '', ''],
                answer: ''
            },
    
            {
                question: '',
                options: ['', '', '', ''],
                answer: ''
            },
    
            {
                question: '',
                options: ['', '', '', ''],
                answer: ''
            },

            {
                question: '',
                options: ['', '', '', ''],
                answer: ''
            },

            {
                question: '',
                options: ['', '', '', ''],
                answer: ''
            },

            {
                question: '',
                options: ['', '', '', ''],
                answer: ''
            },
        ]
    },

    {
        Course: "Course 4",
        questions: [
            {
                question: '',
                options: ['', '', '', ''],
                answer: ''
            },
            
            {
                question: '',
                options: ['', '', '', ''],
                answer: ''
            },
            
            {
                question: '',
                options: ['', '', '', ''],
                answer: ''
            },
            
            {
                question: '',
                options: ['', '', '', ''],
                answer: ''
            },
            
            {
                question: '',
                options: ['', '', '', ''],
                answer: ''
            },
            
            {
                question: '',
                options: ['', '', '', ''],
                answer: ''
            },
            
            {
                question: '',
                options: ['', '', '', ''],
                answer: ''
            },

            {
                question: '',
                options: ['', '', '', ''],
                answer: ''
            },
            
        ]
    }
]
    
    
    
    
    
    
    
    
    
    
    
    
    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     answer: ''
    // },
    
    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     answer: ''
    // },
    
    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     answer: ''
    // },
    
    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     answer: ''
    // },
    
    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     answer: ''
    // },
    
    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     answer: ''
    // },
    
    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     answer: ''
    // },
    
    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     answer: ''
    // },
    
    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     answer: ''
    // },
    
    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     answer: ''
    // },
    
    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     answer: ''
    // },
    
    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     answer: ''
    // },
    
    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     answer: ''
    // },
    
    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     answer: ''
    // },
    
    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     answer: ''
    // },
    
    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     answer: ''
    // },
    
    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     answer: ''
    // },
    
    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     answer: ''
    // },
    
    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     answer: ''
    // },
    
    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     answer: ''
    // },
    
    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     answer: ''
    // },
    
    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     answer: ''
    // },
    
    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     answer: ''
    // },
    
    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     answer: ''
    // },
    
    // {
    //     question: '',
    //     options: ['', '', '', ''],
    //     answer: ''
    // },
    
    // {
    //     question: 'EHA',
    //     options: ['', '', '', ''],
    //     answer: ''
    // },
    
    
    
    
    // ];