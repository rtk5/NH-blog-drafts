# Neural Networks

We live in a society, and naturally, that comes with the consequence of living with other humans. But in reality, society is just a large group of neuron clusters deciding to tolerate each other for the sake of survival. Neural networks are humanity's attempt at playing god, which, if sci-fi is to be used as a consensus, never ends well for us as a species. It's our attempt to simulate biological computation because of how rudimentary AND & OR gates are when it comes to understanding context. 

Instead, neural networks act as an extension, a crankshaft to an engine, in our attempts to teach computers to be closer to human intelligence than ever before.

---

## So what *is* a neural network?

A neural network is a machine learning model inspired by the lump of fats and salts currently processing this text. 

It is made up of **Nodes** (basically our idea of neurons but digital—they're just a fancy way of saying weights and functions), which when connected to one another, much like actual neurons, can learn complex patterns and processes.  

On a more understandable plane of thought, it works something like this:

- **Input Layer**: Takes input in the form of numbers.  
- **Hidden Layer**: Where the magic happens (the magic in question being the multiplication of weights and inputs, addition of biases and activation functions).  
- **Output Layer**: Where it tells us what it figured out.

The objective of this 'training' exercise being the determination of the correct weights.  

---

## Example: Cat vs Dog

Let’s say you want to build an app that can tell whether a picture contains a cat or a dog.

Here’s what you’d do:

- Gather lots of labeled images (thousands of cats and dogs).
- Convert each image into pixel data (literally just a lot of numbers).
- Feed this into a neural network.
- The network learns from the examples—adjusting weights using something called backpropagation and gradient descent *(more on that further down :] )*.
- After training, show it a new image, and it’ll bark (or meow) out the correct answer.

It doesn’t know what “ears” or “fur” are. But it learns patterns in the data that usually mean *“cat”* or *“dog”*.

---

## Backpropagation: The "I messed up" reflex

Backpropagation is the feedback system. Imagine the network guesses “dog” but the image is a cat.  

**oops.**

Backpropagation calculates the error (how wrong it was), and works backward through the network to adjust the weights. The idea is to minimize the error over time by learning from thousands of these little failures.

It's like if you kept making bad paneer gravy, and you tried objectively rating yourself:

- “Too spicy.” → You use less chili powder next time.  
- “Too watery.” → You dehydrate the onions before putting them in the gravy base.  

Over time, your ability to make the *"impossible to mess up"* dish (and the neural network) improves.  

---

## Example: Juice or Soup?

Okay, a silly one:

- **Input**: Hot/Cold, Sweet/Savory, Thick/Thin  
- **Output**: Juice or Soup

Over time, the network learns:

- Cold + Sweet = Juice  
- Hot + Savory = Soup

Now toss in weird combos. The network will guess. Not always right, but often surprisingly close, especially with enough training data. (Juicy soup? Soup-y juice? Only the model knows.)

---

## A word on Activation Functions

We talked about activation functions earlier, it's basically a greenlight for whether a node can fire or not.

Activation functions like **ReLU**, **sigmoid**, and **tanh** add non-linearity to the model—meaning it can learn more complex patterns than just drawing straight lines through your data.

Without activation functions, neural networks would basically just be a fancy spreadsheet.  

Imagine trying to use 100% of your brain.  
Yeah exactly.

---

## The glow-up arc

Neural Networks get better as they train more, it's like working out with no restrictions on genetics, diet or recovery time.  

Which is why it's all the rage now.

---

Until then, and until the deep learning neural networks with 100s of hidden and input layers decide to live in a society...

**Stay alive.**
