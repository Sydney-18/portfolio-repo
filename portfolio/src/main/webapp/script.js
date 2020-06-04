// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomQuote() {
  const greetings =
      ['Act as if what you do makes a difference. It does. - William James', 'Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchhill', 
       'Never bend your head. Always hold it high. Look the world straight in the eye. - Hellen Keller', 'It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome. - William James',
       'Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein', 'Sometimes you will never know the value of a moment, until it becomes a memory. - Dr. Seus', 'The most wasted of days is one without laughter. - E. E. Cummings',
       'You must do the things you think you cannot do. - Eleanor Roosevelt', 'It is never too late to be what you might have been. - George Eliot', 'Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination. - Mae Jemison',
       'Be the change that you wish to see in the world. - Mahatma Gandhi', 'If I cannot do great things, I can do small things in a great way. - Martin Luther King Jr.', 'Each person must live their life as a model for others. - Rosa Parks'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}  

// Greeting function
async function getGreetingUsingAsyncAwait() {
  const response = await fetch('/data');
  const greeting  = await response.text();
  document.getElementById('data-holder').innerText = greeting;
}

function getComments() {
  fetch('/data').then(response => response.json()).then((comments) => {
    console.log(comments);
    document.getElementById('comments-container').innerText = comment;
  });
}