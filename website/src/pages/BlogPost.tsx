import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Calendar, User, Clock, Tag } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  // Sample blog posts data - in a real app, this would come from a CMS or API
  const blogPosts = {
    'neural-networks-brains-in-silicon': {
  title: 'Neural Networks: Brains in Silicon',
  author: {
    name: 'Arun H',
    image: 'https://pictures-for-websites.vercel.app/arun-images/arun2.jpg', // substitute a proper author image if needed
    bio: "I am a tech enthusiast and a computer science student who believes that there should be balance in learning and humour. When I'm not being suspicious of the tech around me, I am often motorsports(like everything engines related) and looking up obscure facts about the world around us."
  },
  date: '15 Sep 2025',
  readTime: '10 min read',
  category: 'Machine Learning',
  tags: ['Neural Networks', 'Machine Learning', 'Deep Learning', 'AI Basics', 'Backpropagation'],
  image: 'https://pictures-for-websites.vercel.app/arun-images/cover.jpg',
  content: `
# Neural Networks

We live in a society, and naturally, that comes with the consequence of living with other human beings. But in reality, society is just a large group of neuron clusters deciding to tolerate each other for the sake of survival. Neural networks are humanity's attempt at playing god, which, if sci-fi is to be used as a consensus, never ends well for us. Regardless, it's our attempt to simulate biological computation because of how strict machine algorithms fail to handle ambiguity and messy data. Instead, neural networks act as an extension, a crankshaft to an engine, in our attempts to teach computers to be closer to human intelligence than ever before.
![helley](https://pictures-for-websites.vercel.app/arun-images/helley.jpg)

A **neural network** is a machine learning model inspired by our brains. It is made up of **nodes** (basically our idea of neurons but digital, just weights and functions in a trench coat), which when connected to other nodes, much like actual neurons, can learn complex patterns and processes. On a more technical plane of thought, it works something like this:

- **Input Layer:** Takes input in the form of numbers.  
- **Hidden Layer:** Where the magic happens (the magic in question being the multiplication of weights and inputs, bias addition and activation functions).  
- **Output Layer:** Where it tells us what it figured out.

![belikeNN](https://pictures-for-websites.vercel.app/arun-images/like.jpg)

The objective of this 'training' exercise is the determination of the correct **weights**. A weight is not dissimilar to a control knob, where the higher the knob is cranked up (larger the weight), the more each input is amplified (through multiplication). The reason we need to change the weights is to ensure that the network makes good decisions. Think of it like tuning a guitar, at first, it all off-key, random even. You pluck, you play around with the tune and adjust accordingly. Not immediately, but over time your guitar sounds like how you want it, and your neural network makes better and better decisions.

![stack](https://pictures-for-websites.vercel.app/arun-images/layers.jpg)
---

### Example: Cats vs Dogs

---

Let’s say you want to build an app that can tell whether a picture contains a cat or a dog.

Here’s what you’d do:
1. Gather lots of labeled images (thousands of cats and dogs).  
2. Convert each image into pixel data (literally just a lot of numbers).  
3. Feed this into a neural network. (P.S. – This is a highly simplified explanation)  
4. The network learns from the examples—adjusting weights using something called **backpropagation** and **gradient ascent** (more on that further down :] ).  
5. After training, show it a new image, and it’ll bark (or meow) out the correct answer.

However, neural networks do not truly **understand**, it is very fancy maths adapting to what it experiences through labelled observation. It does not understand the concept of canines and felines, just recognizes patterns through data. This distinction is important because people often assume AI “knows” things. Nope. It doesn’t know that a dog wags its tail or that cats are better than dogs, it only knows that certain pixel arrangements or features correlate with “dog” or “cat.”

---
![car or doge](https://pictures-for-websites.vercel.app/arun-images/mem.jpg)

### Backpropagation & Gradient Ascent

---

Backpropagation is the **feedback system**. Imagine the network guesses “dog” but the image is a cat.

**oops.**

Backpropagation calculates the error (how wrong it was), and works backward through the network to adjust the weights. The idea is to minimize the error over time by learning from boat-loads of these little failures. Gradient Ascent meanwhile is about the maximization of the correct output and it's application, like increasing a weight after it produces a favourable output.

---

### A Sillier Example

---
Let's say I create a network with the purpose of identifying if something is a soup or juice.

- **Input:** Hot/Cold, Sweet/Savory, Thick/Thin  
- **Output:** Juice or Soup  

Over time, the network learns:

- Cold + Sweet = Juice  
- Hot + Savory = Soup  

Now toss in weird combos. The network will guess. Not always right, but often surprisingly close, especially with enough training data.  
(*also cold soups are disgusting, this is unrelated btw I just hate cold soups*)

![dum](https://pictures-for-websites.vercel.app/arun-images/dumm.jpg)
---

### Activation Functions

---

We talked about activation functions earlier and it's basically a **greenlight** for whether a node can fire or not. Activation functions like **ReLU**, **sigmoid**, and **tanh** (the names seem complex but the use cases are fairly mundane) add **non-linearity** to the model, basically giving it the ability to second guess and adapt, closer to how we do it.

Without activation functions, neural networks would basically just be a fancy spreadsheet, spewing out data at random. Imagine trying to use 100% of your brain, at the same time, but instead of Scarlett Johannson from *Lucy*, you would end up like my Intel Pentium processor trying to run **Cyberpunk 2077**.

---
![samurai](https://pictures-for-websites.vercel.app/arun-images/silverhand.jpg)

---

### Overfitting & Limits

---

Neural networks get better as they train more, but they still have limits and run the risk of being **overfitted**. An overfit neural network is like a student who memorized the entire math textbook, examples and all; but then the exam gave slightly different values and oops, **system.exe has stopped working**. (This just further demonstrates why good quality training data and backpropagation runs are so important.) But the ceiling for our synthetic think tanks is extremely high, and every day we explore new ways to exploit them, just to make our lives a little less inconvenient.

However, it is only a matter of time before some genius makes millions of these nodes and puts them into a **clanker**, and as much hope as **Wall-E**, **Baymax** and the good version of **Chitti** the robot instill in me, I still can't trust an unsupervised rust bucket imitating us flesh people.

---

I would like to end this blog before I am put on an **anti-wireback hit list**. And in case I don't see you, **good afternoon, good evening, and good night.**

  `
},

    'welcome-to-college-youre-now-in-the-algorithm': {
      title: 'Welcome to College: You\'re Now in the Algorithm',
      author: {
        name: 'Diya Prakash',
        image: 'https://pictures-for-websites.vercel.app/diya.webp',
        bio: '3rd Year CSE student passionate about AI/ML and sharing honest insights about college life. Currently running on caffeine and confusion, but making it work!'
      },
      date: '25 Aug 2025',
      readTime: '5 min read',
      category: 'College Life',
      tags: ['College', 'Life', 'Freshers', 'Algorithm'],
      image: 'https://pictures-for-websites.vercel.app/welc.jpg',
      content: `
# Welcome to College: You're Now in the Algorithm

Hey freshers, and hello to the rest of you seniors who are basically running on caffeine, deadlines, and whatever confidence you had before grades humbled you into oblivion.

So, you've joined college. You've got dreams, ambitions, and a new laptop that you swear you're going to use for "productive work" — welcome to the world of AIML, where the code compiles 10% of the time, and the rest of the time you're just debugging your own life choices (kind of like me during mechanical ESA, staring at some PDF called MECHANICAL_COMBINED_SLIDES at 1 a.m., wondering why I exist).

## Let's be real:

College is basically a giant neural network. First year is data preprocessing (removing bad habits… or adding new ones). Second year is training (overfitting on random tutorials you'll never revisit). Third year is hyperparameter tuning (a.k.a. freaking out about internships). And final year? That's just inference mode — praying your model (a.k.a. you) works in the real world (spoiler: it's more like barely compiling).

## But here's the problem:

Most of us are in default mode — running in the great rat race. Spending three days researching "best ML course for beginners" and zero days actually starting one. Doing deep learning because it sounds deep. Building a chatbot because… well, ChatGPT is the buzzword of the decade. Before you know it, you've got around 10 GitHub repos named "final_final_version_REAL" and no clue what half of them do.

**We forget the "why."**

Why did we even start learning ML? Was it curiosity? Was it to make something cool? Or was it just because LinkedIn made us feel like unemployed trash at 19 (btw, it still does)

## Here's my hot take:

You don't have to be the fastest rat. You just have to be the curious one. Build ridiculous projects. Make the world's worst classifier. Train a model that predicts your GPA based on the number of classes you slept through. Fail spectacularly, laugh about it, then fix it. That's how you actually learn.

Because one day, when you graduate, you'll realize something important:

**There was never really a finish line — just a lot of strange, frustrating, surprisingly fun checkpoints along the way.**

And if you remember nothing else from this rant, remember this: it's better to trip on a path you chose than to sprint down one you don't understand. Slow down, look around, and maybe — just maybe — start running your own algorithm.

---

*By Diya Prakash, 3rd Year CSE student (currently in inference mode… inferring why I chose CSE)*
      `
    },
    'machine-learning-fundamentals-beginners-guide': {
      title: 'Machine Learning Fundamentals: A Beginner\'s Complete Guide',
      author: {
        name: 'Rithvik Matta',
        image: 'https://pictures-for-websites.vercel.app/rtk.webp',
        bio: 'ML enthusiast and active member of Neural Hive. Passionate about making complex AI concepts accessible to beginners. When not coding, you can find him explaining algorithms with coffee analogies.'
      },
      date: '25 Aug 2025',
      readTime: '12 min read',
      category: 'Machine Learning',
      tags: ['Machine Learning', 'AI Fundamentals', 'Data Science', 'Beginner Guide'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `
# Machine Learning Fundamentals: A Beginner's Complete Guide


Machine learning has become one of the most transformative technologies of our time, powering everything from recommendation systems to autonomous vehicles. If you're new to this field, understanding the fundamentals is crucial for building a solid foundation. This comprehensive guide will walk you through the essential concepts, processes, and terminology you need to know.

## What is Machine Learning?

Machine learning is a subset of artificial intelligence (AI) that enables computers to learn and make decisions from data without being explicitly programmed for every specific task. Instead of following pre-written instructions, ML systems identify patterns in data and use these patterns to make predictions or decisions about new, unseen data.

Think of it like teaching a child to recognize animals. Instead of describing every possible feature of a cat, you show them hundreds of cat pictures. Eventually, they learn to identify cats on their own by recognizing common patterns and features.

![Simple Supervised Learning Example](https://media.geeksforgeeks.org/wp-content/uploads/20250428163955355688/Flowchart-of-Machine-Learning-Model.webp)


## The Machine Learning Process

Building a machine learning model involves several key stages that work together to create an intelligent system:

### 1. Data Collection and Preparation

The machine learning process starts with collecting and processing training data. There's a famous saying in the ML community: "garbage in, garbage out." This means that an ML model is only as good as the data used to train it. Data preparation and processing might seem routine, but it's arguably the most critical stage that can make or break your model's performance.

![Machine Learning Process](/pictures/training-data.png)


#### Types of Data

**Labeled vs. Unlabeled Data:**

- **Labeled data:** Each example comes with a correct answer or target variable. For instance, in an image classification task, labeled data would consist of images along with their corresponding class labels (cat, dog, car).
- **Unlabeled data:** Examples without any associated labels or target variables. This might be a collection of images without any labels or annotations.

**Structured vs. Unstructured Data:**

 **Structured data:** Organized in a predefined format, typically in tables or databases with rows and columns. This includes:
  - **Tabular data:** Spreadsheets, databases, or CSV files with rows representing instances and columns representing features.
  - **Time-series data:** Sequences of values measured over time, such as stock prices, sensor readings, or weather data.

 **Unstructured data:** Lacks a predefined structure, requiring advanced techniques to extract meaningful patterns:
  - **Text data:** Documents, articles, social media posts, and other textual content.
  - **Image data:** Digital images, photographs, and video frames.
  - **Audio data:** Sound recordings, music, and speech.
  - **Video data:** Moving images with temporal sequences.

### 2. Algorithm Selection

Once your data is prepared, you need to choose an appropriate machine learning algorithm. The choice depends on several factors:

![Machine Learning Process](/pictures/machine-learning-process.png)


- **Problem type:** Classification, regression, clustering, or other tasks.
- **Data size:** Some algorithms work better with large datasets, others with smaller ones.
- **Interpretability needs:** Some algorithms provide clear explanations, others are "black boxes."
- **Performance requirements:** Speed vs. accuracy trade-offs.

### 3. Model Training

Training is where the magic happens. The algorithm analyzes your data to learn patterns and relationships. This process varies depending on the learning approach.

![Simple ML Workflow](https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AVUzIPOx0QuAub6tGLIQy2A.png)


## Types of Machine Learning

![Types of ML](https://blog.infodiagram.com/wp-content/uploads/2024/09/predictive-ai-model-development-process-diagram-1024x576.png)


### Supervised Learning

In supervised learning, algorithms are trained on labeled data. The goal is to learn a mapping function that can predict the output for new, unseen input data.

**Common supervised learning tasks:**

- **Classification:** Predicting categories (spam vs. not spam, disease vs. healthy).
- **Regression:** Predicting continuous values (house prices, temperature).

**Popular algorithms:**

- Linear Regression
- Decision Trees
- Random Forest
- Support Vector Machines
- Neural Networks

### Unsupervised Learning

Unsupervised learning algorithms learn from unlabeled data. The goal is to discover inherent patterns, structures, or relationships within the input data without knowing the "correct" answers.

**Common unsupervised learning tasks:**

- **Clustering:** Grouping similar data points together.
- **Dimensionality reduction:** Simplifying data while preserving important information.
- **Anomaly detection:** Identifying unusual patterns or outliers.

**Popular algorithms:**

- K-Means Clustering
- Hierarchical Clustering
- Principal Component Analysis (PCA)
- Association Rules

### Reinforcement Learning

In reinforcement learning, the machine learns through trial and error, receiving feedback in the form of rewards or penalties for its actions. The goal is to learn the best actions to take in different situations to maximize cumulative rewards.

**Key concepts:**

- **Agent:** The learning entity.
- **Environment:** The world the agent operates in.
- **Actions:** What the agent can do.
- **Rewards:** Feedback from the environment.
- **Policy:** The agent's strategy for choosing actions.

**Applications:**

- Game playing (chess, Go).
- Robotics.
- Autonomous vehicles.
- Resource allocation.

## Model Evaluation and Validation

After training, you need to evaluate how well your model performs. This involves:

### Performance Metrics

Different metrics suit different types of problems.

**For Classification:**

- **Accuracy:** Percentage of correct predictions.
- **Precision:** Of positive predictions, how many were correct?
- **Recall:** Of actual positive cases, how many were identified?
- **F1-Score:** Harmonic mean of precision and recall.

**For Regression:**

- **Mean Squared Error (MSE):** Average of squared differences.
- **Root Mean Squared Error (RMSE):** Square root of MSE.
- **Mean Absolute Error (MAE):** Average of absolute differences.

### Cross-Validation

To ensure your model generalizes well to new data, you should use techniques like:

- **Train-Test Split:** Divide data into training and testing sets.
- **K-Fold Cross-Validation:** Split data into k parts, train on k-1, test on 1, repeat.
- **Hold-Out Validation:** Keep a separate validation set for final evaluation.

## Inferencing: Putting Models to Work

After training and validation, it's time to use your model to make predictions or decisions. This process is called inferencing.

![Machine Learning Process](/pictures/inferencing.png)


### Types of Inferencing

**Batch Inferencing:**

Batch inferencing processes large amounts of data all at once to provide a set of results. This approach is ideal for tasks like data analysis, where accuracy is more important than speed. Examples include:

- Monthly customer segmentation analysis.
- Quarterly financial forecasting.
- Daily recommendation updates.

**Real-Time Inferencing:**

Real-time inferencing makes decisions quickly in response to new information as it arrives. This is crucial for applications requiring immediate responses, such as:

- Chatbots responding to user queries.
- Self-driving cars making split-second decisions.
- Fraud detection systems flagging suspicious transactions.
- Medical diagnosis systems providing instant results.

## Common Challenges and Solutions

### Overfitting and Underfitting

- **Overfitting:** Model memorizes training data but fails on new data.
  - **Solution:** Use regularization, cross-validation, or simpler models.
- **Underfitting:** Model is too simple to capture underlying patterns.
  - **Solution:** Use more complex models, add features, or train longer.

### Data Quality Issues

- **Missing data:** Use imputation techniques or algorithms that handle missing values.
- **Outliers:** Identify and handle extreme values appropriately.
- **Bias:** Ensure your data represents the problem you're solving.

### Scalability

- **Large datasets:** Use distributed computing, cloud platforms, or streaming algorithms.
- **Real-time requirements:** Optimize models for speed, use edge computing.

## Getting Started: Your First Steps

- **Learn the basics:** Understand statistics, probability, and programming (Python or R).
- **Practice with datasets:** Start with clean, well-documented datasets.
- **Use tools and libraries:** Leverage scikit-learn, TensorFlow, or PyTorch.
- **Join communities:** Participate in Kaggle competitions, forums, and meetups.
- **Work on projects:** Apply your knowledge to real-world problems.

## Key Takeaways

Machine learning is a powerful tool that can solve complex problems across various domains. Success depends on:

- **Quality data:** Clean, relevant, and representative datasets.
- **Appropriate algorithms:** Choosing the right approach for your problem.
- **Proper evaluation:** Using robust validation techniques.
- **Continuous learning:** The field evolves rapidly, so stay updated.

Remember that machine learning is both an art and a science. While understanding the theory is important, practical experience through hands-on projects will accelerate your learning journey.

The field of machine learning offers endless possibilities for innovation and problem-solving. Whether you're interested in healthcare, finance, technology, or any other domain, ML skills can help you unlock valuable insights from data and create intelligent systems that make a real difference.

Start with the fundamentals, practice regularly, and don't be afraid to experiment. The journey of mastering machine learning is challenging but incredibly rewarding.

      `
    },
    'deep-learning-neural-networks-explained': {
      title: 'Deep Learning and Neural Networks: From Theory to Practice',
      author: {
        name: 'Arjun Kumar',
        image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
        bio: 'Deep Learning researcher and Neural Hive co-founder. Currently working on computer vision projects and loves breaking down complex neural architectures into digestible concepts.'
      },
      date: '29 Jul 2025',
      readTime: '15 min read',
      category: 'Deep Learning',
      tags: ['Deep Learning', 'Neural Networks', 'AI', 'Computer Vision'],
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `
# Deep Learning and Neural Networks: From Theory to Practice

Deep learning has revolutionized artificial intelligence, enabling breakthrough advances in computer vision, natural language processing, and many other domains. This comprehensive guide explores the fundamental concepts behind neural networks and how they power modern AI applications.

## Understanding Neural Networks

Neural networks are computational models inspired by the human brain's structure and function. They consist of interconnected nodes (neurons) that process and transmit information, learning complex patterns through training on large datasets.

### The Basic Building Block: The Perceptron

The simplest form of a neural network is the perceptron, which takes multiple inputs, applies weights to them, sums them up, and passes the result through an activation function to produce an output.

### Multi-Layer Perceptrons

By stacking multiple layers of perceptrons, we create deep neural networks capable of learning complex, non-linear relationships in data. Each layer transforms the input in increasingly abstract ways.

## Deep Learning Architectures

### Convolutional Neural Networks (CNNs)

CNNs are particularly effective for image processing tasks. They use convolutional layers to detect local features like edges and textures, pooling layers to reduce dimensionality, and fully connected layers for final classification.

### Recurrent Neural Networks (RNNs)

RNNs are designed to work with sequential data by maintaining internal memory. They're particularly useful for natural language processing and time series analysis.

### Transformer Architecture

The transformer architecture, introduced in the "Attention Is All You Need" paper, has become the foundation for modern language models like GPT and BERT.

## Training Deep Networks

### Backpropagation

The backpropagation algorithm is the cornerstone of neural network training. It calculates gradients by propagating errors backward through the network, allowing us to update weights to minimize loss.

### Optimization Algorithms

Various optimization algorithms like SGD, Adam, and RMSprop help navigate the complex loss landscape of deep networks more effectively.

### Regularization Techniques

Techniques like dropout, batch normalization, and weight decay help prevent overfitting and improve generalization.

## Applications and Use Cases

Deep learning has found applications across numerous domains:

- **Computer Vision**: Image classification, object detection, facial recognition
- **Natural Language Processing**: Machine translation, sentiment analysis, chatbots
- **Healthcare**: Medical image analysis, drug discovery, disease prediction
- **Autonomous Systems**: Self-driving cars, robotics, game playing

## Challenges and Future Directions

While deep learning has achieved remarkable success, several challenges remain:

- **Interpretability**: Understanding how deep networks make decisions
- **Data Efficiency**: Reducing the amount of labeled data required
- **Computational Requirements**: Making models more efficient and accessible
- **Robustness**: Ensuring models work reliably in real-world conditions

## Getting Started with Deep Learning

To begin your deep learning journey:

1. **Master the fundamentals**: Linear algebra, calculus, and probability
2. **Choose a framework**: TensorFlow, PyTorch, or Keras
3. **Start with tutorials**: Work through guided projects and examples
4. **Practice with datasets**: Experiment with real-world data
5. **Join the community**: Participate in forums, competitions, and meetups

Deep learning continues to evolve rapidly, with new architectures and techniques emerging regularly. By understanding the fundamentals and staying engaged with the community, you'll be well-positioned to contribute to this exciting field.
      `
    },
    'nlp-from-foundations-to-llms': {
      title: 'NLP: From Foundations to LLMs',
      author: {
        name: 'Adithya Mallya',
        image: 'https://pictures-for-websites.vercel.app/malya/adimallya.jpg',
        bio: 'Tech enthusiast who likes working on ML. Currently in 3rd Year and doing Research involving NLP. Loves exploring new tech stuff.'
      },
      date: '1 Sep 2025',
      readTime: '10 min read',
      category: 'Natural Language Processing',
      tags: ['NLP', 'Natural Language Processing', 'LLMs', 'Text Processing', 'Tokenization'],
      image: 'https://pictures-for-websites.vercel.app/malya/Picture1.jpg',
      content: `
# NLP: From Foundations to LLMs


You obviously by now have abused ChatGPT enough to sometimes wonder how it does it all.
For such curious ones,

Enter, **Natural Language Processing (NLP)** where we teach machines to understand, interpret, and generate "human" language.

This will be the first in a series of bi-weekly blogs that will go from basic NLP to GPT architecture **with** the Math behind it. Stick till the end to Know It All !
# General path we take in this series:

1. **Basics**
2. **Vector Space Models and Word Representation**
3. **Language Models**
4. **Neural Networks**
5. **Sequential Models**
6. **Attention**
7. **Transformers**
8. **LLM Architecture**
9. **Finale**

*(Each topic above will have multiple blogs under them depending on the complexity and size of the topic.)*
Think of this series as a guided tour:
* We'll start with the simple stuff (cleaning and processing text).
* We'll level up into **word embeddings, neural networks, and sequential models**.
* Then we'll unlock **attention mechanisms, transformers, and GPT itself**.

## 1. Introduction

First question should be why should you even care? You've already clicked on the blog is reason enough, but assuming a curious 'you' pressed it just to find out what its all about,
* NLP is everywhere! From your **autocorrect** to **Google Translate** to **Netflix recommendations**.
* Understanding NLP is the first step toward building your own cool stuff.
* And honestly… it's just plain cool to know how machines "read" and "write."

In this blog, we'll go through and break down the NLP pipeline, the set of steps that transform raw human language to meaningful (to a machine) stuff a machine can use and get back.

## 2. What is NLP Really Doing?

**At the core of NLP is the process to make machines emulate "human-like"- "thinking" so that it can produce results that look like it has some understanding.**

This sentence sounds pessimistic and rebellious towards the AGI(Artificial General Intelligence) overlords because it might well be the case that AI is not understanding anything at all.You might wonder why. But that's another story for another blog.You might want to check it out here! Do that later, finish reading this first!

But for this time, lets keep it simple, and assume it (the *model*) "learns" from training.If you got stuck at "model", my friend has written out an awesome blog to get you through the basics.Go there and come back!

We as humans have huge context window. When someone says "bank", we will immediately know from context whether they mean a financial institution or the side of a river.

But machines work on bits as you already know.So how DO you make it learn?

Before that, something to take note, sometimes we misunderstand stuff.
What I mean is, when someone says, "I saw the man with the telescope."
1. Did I use a telescope to see the man?
2. Or did the man have a telescope?

How do we deal with such deviations.
This simple example tells why NLP is challenging & why we need a structured pipeline to help machines make sense of language.

So back to how it learns: We break it down into stages:
- 3.1 Text Collection & Input
- 3.2 Text Preprocessing
- 3.3 Text Representation
- 3.4 Modeling & Learning
- 3.5 Evaluation
- 3.6 Deployment & Applications

In this blog we will keep it light (for you & I both) and learn till 3.3. Text Representation.

## 3. The General NLP Pipeline

The NLP pipeline is like a recipe that takes in raw text, cleans it up, represents it in a way machines can understand, and then uses it for predictions or tasks.

The boiled down end goal after processing Natural Language is to do "Next word prediction". Hold that thought for now.

### 3.1 Text Collection & Input

Let not go too much into detail here.
Okay, so everything starts with **data**.
The data that is required to train an LLM like ChatGPT is really huge.
Legacy models like GPT3 were trained on 45TB or raw plain -text.And about 570GB of filtered quality text.
Guess how much GPT-4 was? 1000TB. Yes 1000TB!! (i.e 1PetaByte)
As we see the data size plays an important role in the quality of the model.

OpenAI collected data using WebCrawlers, "Licensed" Datasets, Human Annotators who manually rated outputs.

Peasants like us usually search datasets in websites like Kaggle, HuggingFace, Roboflow, Stanford Open NLP datasets, Web Crawlers, Open Source websites who have their own APIs that help us scrape their website, maybe surveys…

![Data Collection](https://pictures-for-websites.vercel.app/malya/Picture1.png)

### 3.2 Text Preprocessing

Raw text randomly picked up from websites are usually messy.
Pre-processeing cleans and purifies this data for further processing and makes it
suitable for consumption by the model.

#### 3.2.1 Tokenization
Why tokenization? To understand that we must first ask:
What is tokenization?
Tokenization usually involves breaking down sentences into words, phrases or sentences.
The actual implementation depends on the requirement of the model which you will learn
later.
If you want to try, you can copy the code below:(make sure you have python installed
and are in an environment)

**Word Tokenization:**
\`\`\`python
from nltk.tokenize import word_tokenize
text = "This is Neural Hive!"
print(word_tokenize(text))
# Output: ['NLP', 'is', 'amazing', '!']
\`\`\`

**Sentence Tokenization:**
\`\`\`python
from nltk.tokenize import sent_tokenize
text = "NLP is amazing! It powers chatbots."
print(sent_tokenize(text))
# Output: ['NLP is amazing!', 'It powers chatbots.']
\`\`\`

**Subword Tokenization:**(used in GPT/BERT):
Breaks rare words into smaller units like "unhappiness" → "un", "happiness". Helps handle
unknown words.

![Tokenization Examples](https://pictures-for-websites.vercel.app/malya/Picture3.png)
![Tokenization Process](https://pictures-for-websites.vercel.app/malya/Picture4.png)

Coming to "why",
In the next process of the NLP pipeline, there are models for Text Representation that need distinct meaningful words, for that we need sentences to be broken down to words or phrases.

#### 3.2.2 Lowercasing
Text is case-sensitive. "Apple" and "apple" would be treated as different tokens. To avoid unnecessary duplication, we often lowercase everything.

#### 3.2.3 Stopwords
If I say, "Rahul was running very fast.He won the race", now if I say "Rahul running fast won race", would you get the meaning. Hopefully yes.In the same way, model doesn't understand anything meaningful with words like "he","she", "the" called stopwords. So we omit them while processing data.Try it out

\`\`\`python
from nltk.corpus import stopwords
stop_words = set(stopwords.words("english"))
words = word_tokenize("This is a simple sentence")
filtered = [w for w in words if w.lower() not in stop_words]
print(filtered)  # ['This', 'simple', 'sentence']
\`\`\`

#### 3.2.4 Stemming

Reduces words into its stems/ root words which removes the unncessary information and provides easier processing further.

running -> run

The problem is, its not that good. It converts some words into meaningless stems.

studies -> studi (not usefull)

![Stemming Process](https://pictures-for-websites.vercel.app/malya/Picture5.png)

#### 3.2.5 Lemmatization
Lemmatization is more advanced—it uses dictionaries and grammar to reduce words to their **valid base form (lemma)**.
"runnig" -> "run"
"better"->"good"

\`\`\`python
from nltk.stem import WordNetLemmatizer
lemmatizer = WordNetLemmatizer()
print(lemmatizer.lemmatize("running", pos="v"))  # run
print(lemmatizer.lemmatize("better", pos="a"))   # good
\`\`\`

You might ask whats the big difference. Lemmatization just performs better!Why?
Lemmatization is often better than Stemming because it produces meaningful, dictionary-defined words (lemmas) by looking at context and part-of-speech, whereas stemming produces a simplified root that may not be a real word and can be less accurate.

![Lemmatization vs Stemming](https://pictures-for-websites.vercel.app/malya/Picture5.jpg)
![Lemmatization Examples](https://pictures-for-websites.vercel.app/malya/Picture6.jpg)

#### 3.2.6 Handling Emojis and Special Characters

Modern NLP uses emojis heavily (social media).
😊 "happy", 😢 = "sad"
Emojis can be mapped to words or removed depending on task.

#### 3.2.7. Handling Out-of-Vocabulary (OOV) Words

Older models (like Word2Vec which you will learn later) fail on unseen words. Solution:
Subword tokenization (BPE, WordPiece).
Or Replace with <UNK> (short for unknown) token.

#### 3.2.8 Part-of-Speech (POS) Tagging (Optional Preprocessing)

Sometimes we enrich tokens with their grammatical roles.
"run (verb)" vs "run (noun)"

\`\`\`python
import nltk
nltk.download('averaged_perceptron_tagger')
print(nltk.pos_tag(word_tokenize("I am running fast")))
# [('I', 'PRP'), ('am', 'VBP'), ('running', 'VBG'), ('fast', 'RB')]
\`\`\`

![POS Tagging](https://pictures-for-websites.vercel.app/malya/Picture7.jpg)

#### 3.2.9 Named Entity Recognition (NER) Cleaning

Entities like "New York" or "Barack Obama" should stay intact. Tokenization can break them and they will lose their meaning, so we apply NER tagging before processing.

#### 3.2.10 Language-Specific Preprocessing

Different languages need different rules.
Chinese/Japanese: No spaces between words, so tokenization is harder.
Languages (Turkish, Finnish): Need morphological analyzers as they express words in complex terms.

All in all, Text preprocessing doesn't add new meaning, but it makes text ready for representation and modeling.

#### 3.2.11 Noramlization/ Standardization
You know that USA, U.S.A, usa, the us all mean the same right. But the model might stumble so we reduuce all these forms to a standard word
"U.S.A.", "USA", "us" → "usa"

We just built the **foundation of NLP**:
- How raw text is collected
- How preprocessing cleans and prepares it
- Why tokenization, lemmatization, and normalization are essential

![NLP Pipeline Summary](https://pictures-for-websites.vercel.app/malya/Picture8.png)

You now understand *how* machines get text ready for modeling.
In the **next post**, we'll turn this clean text into **mathematical vector, **the secret sauce behind models like GPT, BERT, and beyond. By following this series, you'll be able to **understand the math and logic** powering them.
*Stay tuned for: Text Representation & Vector Space Models.*

Here are two memes for finishing the blog

![NLP Meme 1](https://pictures-for-websites.vercel.app/malya/pic10.jpg)
![NLP Meme 1](https://pictures-for-websites.vercel.app/malya/pic11.jpg)

      `},
    'your-first-data-science-project-from-csv-to-graphs': {
  title: 'Your First Data Science Project: From CSV to Graphs in Python',
  author: {
    name: 'Rithvik AM',
    image: 'https://pictures-for-websites.vercel.app/rithvik-jr/pic.jpg',
    bio: 'I’m a second-year ECE student who loves simplifying complex concepts and integrating ideas to build scalable, unique solutions. I enjoy helping beginners explore AI and technology through hands-on learning.'
  },
  date: '8 Sept 2025',
  readTime: '7 min read',
  category: 'Data Science',
  tags: ['Data Science', 'Python', 'Machine Learning', 'Beginners'],
  image: 'https://pictures-for-websites.vercel.app/rithvik-jr/Images/Cover_Image.png',
  content: `
  ![Cover Image](https://pictures-for-websites.vercel.app/rithvik-jr/Images/Cover_Image.png)
# YOUR FIRST DATA SCIENCE PROJECT: FROM CSV TO GRAPHS IN PYTHON

So you’ve heard about Data Science everywhere—Netflix uses it, doctors use it, even sports teams use it. But how do you get started? Don’t worry, you don’t need a PhD or fancy math to begin.

![Machine Learning](https://pictures-for-websites.vercel.app/rithvik-jr/Images/machine_learning.png)

Today, we’ll do a super simple project:
1. Load Data  
2. Train a basic model  
3. Draw a graph  


---

## Agenda (Structure of this Blog)

Here’s what we’ll cover:

- Setting up our environment (installing the right tools)
- What Pandas is
- What Linear Regression is
- What Scikit-learn is
- What Matplotlib is
- Building a mini project (Predicting student marks from study hours)
- Datasets you can download and try yourself

---

## Setting Up the Environment

Before we start, we need a few libraries. Open your terminal/command prompt and run:

\`\`\`bash
pip install pandas scikit-learn matplotlib
\`\`\`

If you’re using Jupyter Notebook, run this inside a cell:

\`\`\`python
!pip install pandas scikit-learn matplotlib
\`\`\`

What each library does:
- **Pandas** → Work with data tables (like Excel in Python).
- **Scikit-learn** → Machine learning algorithms (we’ll use Linear Regression).
- **Matplotlib** → Make charts and graphs.

---

## What is Pandas?

Pandas is a Python library that helps you work with data easily. The name comes from “Panel Data”, not the cute animal 🐼 (though the logo is a panda!). Think of it as Excel inside Python.

At its core, Pandas gives you two main data structures:
- **Series** → like a single column of data (with labels).
- **DataFrame** → like a spreadsheet or SQL table (rows + columns, with labels and indexes).

Some common use cases:
- **Data loading:** Read files directly from CSV, Excel, SQL, JSON, or even APIs. -> you will see in this blog.
- **Data cleaning:** Handle missing values, rename columns, convert data types, remove duplicates. -> topic for next blog
- **Data wrangling:** Filter rows (e.g., all customers from Bangalore), create new calculated columns, merge/join multiple datasets.
- **Data summarization:** Group by categories (e.g., average sales per region), calculate aggregates (mean, median, min, max, counts).
- **Time series analysis:** Perfect for working with dates, times, and indexed data. -> pandas is widely used for this and this is one of the primary reaons pandas became so popular.
- **Integration:** Works seamlessly with NumPy, Matplotlib, Seaborn, and Scikit-Learn for data science and machine learning. -> you will see integration with Scikit-Learn and Matplotlib in this blog.

Why Not Just Use Excel?

Think of Pandas as Excel on steroids:
- It can handle much larger datasets (millions of rows).
- You can automate repetitive tasks instead of clicking around.
- It’s easier to track and reproduce your analysis since everything is code.
- It integrates with the entire Python ecosystem — so you can go from raw data → cleaning → analysis → visualization → machine learning, all in one place.

![Flow Diagram](https://pictures-for-websites.vercel.app/rithvik-jr/Images/flow.png)

👉 In short: **Pandas makes handling data simple.**

![Python Environment](https://pictures-for-websites.vercel.app/rithvik-jr/Images/panda.jpeg)

---

## What is Linear Regression?

Linear regression is one of the simplest machine learning algorithms. It tries to model the relationship between a dependent variable (what you want to predict) and one or more independent variables (the inputs) by fitting a straight line.
- If there is only one input variable, it’s called Simple Linear Regression. -> we'll focus on this in this blog.
- If there are two or more input variables, it’s called Multiple Linear Regression.

The mathematical equation of a line is
y = mx + c

Imagine you want to predict your marks based on how many hours you study. If you plot hours studied vs marks, the points may look like they form a line.

Linear regression simply draws the **best straight line** through those points to make predictions.

### 📊 Example: Hours vs. Marks
Suppose we collected data from 6 students:

| Hours Studied | Marks Scored |
|---------------|--------------|
| 1 | 35 |
| 2 | 40 |
| 3 | 50 |
| 4 | 60 |
| 5 | 75 |
| 6 | 85 |

First, we can plot this data as a scatter plot:
![Scatter Plot](https://pictures-for-websites.vercel.app/rithvik-jr/Images/Scatter_plot.png)


Then, we fit a **linear regression line**:
![Scatter Plot with line of best fit](https://pictures-for-websites.vercel.app/rithvik-jr/Images/Scatter_plot_with_line_of_best_fit.png)


👉 As you can see, the red line is the **“best fit line”**. If a new student studies 5 hours, we can use this line to **predict their marks** (around 75).

You can practice some problems on Linear Regression here: 

📂 [Linear Regression Problems](https://pictures-for-websites.vercel.app/rithvik-jr/linear_regression_practice_problems.html)

---

## What is Scikit-learn?

Scikit-learn is one of the most popular and widely used machine learning libraries in Python. It provides a simple, consistent, and well-documented way to build, train, and evaluate machine learning models without having to code the algorithms from scratch.

Think of it as your ML toolkit: whenever you need a machine learning algorithm, chances are it’s already implemented in Scikit-learn.

- Supervised Learning (when you have labeled data):
  - Linear Regression (predicting numbers, like prices or marks).
  - Logistic Regression (classification problems, like spam detection).
  - Decision Trees & Random Forests.
  - Support Vector Machines (SVM).

- Unsupervised Learning (when you don’t have labels):
  - Clustering (e.g., K-Means, to group customers by behavior).
  - Dimensionality reduction (e.g., PCA, to reduce features).

- Model Selection & Evaluation:
  - Splitting data into training and testing sets.
  - Cross-validation.
  - Accuracy, precision, recall, F1-score, confusion matrices.
 
- Data Preprocessing:
  - Scaling and normalizing data.
  - Handling categorical variables.
  - Feature extraction.
 
You can learn more about these concepts [here](https://nh-club-website.vercel.app/blog/machine-learning-fundamentals-beginners-guide).

👉 Instead of writing algorithms from scratch, we can just use scikit-learn and focus on solving problems.

---

## What is Matplotlib?

Matplotlib is a visualization library. It helps us make graphs and plots so we can **see patterns in data**.

If Pandas is like Excel for Python, then Matplotlib is like having Excel charts — but much more customizable and powerful.

With just a few lines of code, you can make:
- Line plots → Show trends over time (e.g., stock prices, temperature changes).
  ![Line Plot](https://pictures-for-websites.vercel.app/rithvik-jr/Examples/line_plot.png)
- Bar charts → Compare categories (e.g., sales by region).
  
  ![Bar Chart](https://pictures-for-websites.vercel.app/rithvik-jr/Examples/bar_chart.png)
- Scatter plots → Show relationships between two variables (e.g., hours studied vs. marks scored).
  
  ![Scatter Plot](https://pictures-for-websites.vercel.app/rithvik-jr/Examples/scatter_plot.png)
- Histograms → Show distributions (e.g., how exam scores are spread across students).
  
  ![Histogram](https://pictures-for-websites.vercel.app/rithvik-jr/Examples/histogram.png)
- Pie charts → Show proportions (e.g., market share of companies).
  
  ![Pie Chart](https://pictures-for-websites.vercel.app/rithvik-jr/Examples/pie_chart.png)

You can check out some example graphs and plots in the section "Examples for MatplotLib Graphs" [here](https://colab.research.google.com/drive/19ACGqbPuPAPrKbFLm2H3IE5_WqUvGeXs?usp=sharing). -> we'll learn in detail in the upcoming blogs

👉 Data is easier to understand when you can see it visually.

---

## Mini Project: Predicting Student Marks

Now let’s bring everything together.

### Step 1: Download Dataset

Here’s a simple dataset you can use (CSV file):

📂 [Download Student Scores Dataset](https://pictures-for-websites.vercel.app/rithvik-jr/Datasets/studentscores.csv)

This dataset has:
- **Hours** → How many hours a student studied
- **Scores** → The marks they scored

---

### Step 2: Load the Dataset

We’ll use Pandas to read it: 

\`\`\`python
import pandas as pd

# Load dataset
data = pd.read_csv("student_scores.csv")

# Show first 5 rows
print(data.head())
\`\`\`
Output:

![Output 1](https://pictures-for-websites.vercel.app/rithvik-jr/Outputs/step2.png)
---

### Step 3: Visualize the Data

\`\`\`python
import matplotlib.pyplot as plt

plt.scatter(data["Hours"], data["Scores"])
plt.xlabel("Hours Studied")
plt.ylabel("Scores")
plt.title("Study Hours vs Marks")
plt.show()
\`\`\`

Output:

![Output 2](https://pictures-for-websites.vercel.app/rithvik-jr/Outputs/step3.png)
---

### Step 4: Train Linear Regression Model

\`\`\`python
from sklearn.linear_model import LinearRegression

X = data[["Hours"]]   # Features
y = data["Scores"]    # Target

model = LinearRegression()  #Creates a new Linear Regression model (like an empty calculator that doesn’t know anything yet).

model.fit(X, y)

# Predict for 5 hours of study
pred = model.predict([[5]])  #Take x = 5 (hours studied), plug it into the best-fit line equation (y = m×x + c), and give me the predicted y (marks).
print("Predicted Score for 5 hours:", pred[0])
\`\`\`

Output:

![Output 3](https://pictures-for-websites.vercel.app/rithvik-jr/Outputs/step4.png)
---

### Step 5: Plot the Regression Line

\`\`\`python
line = model.coef_ * X + model.intercept_

plt.scatter(X, y)
plt.plot(X, line, color="red")
plt.xlabel("Hours Studied")
plt.ylabel("Scores")
plt.title("Linear Regression - Study Hours vs Marks")
plt.show()
\`\`\`

Output:

![Output 4](https://pictures-for-websites.vercel.app/rithvik-jr/Outputs/step5.png)
---

## Try It Yourself!

📂 Dataset Link again: [Student Scores CSV](https://pictures-for-websites.vercel.app/rithvik-jr/Datasets/studentscores.csv)

Now it’s your turn! Try changing the dataset, like predicting:
- [House prices](https://pictures-for-websites.vercel.app/rithvik-jr/Datasets/house_prices.csv) 
- [Salary vs experience](https://pictures-for-websites.vercel.app/rithvik-jr/Datasets/salary_data.csv) 
- [Calories burned vs exercise duration](https://pictures-for-websites.vercel.app/rithvik-jr/Datasets/calories_burned.csv) 

And that’s it! You just built your first machine learning model 🎉
  `
    }
  };

  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-poppins font-bold mb-4 glow-text">Post Not Found</h1>
          <p className="text-primary-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 neuron-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center text-primary-accent hover:text-primary-magenta transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl"
              />
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-primary-gray-400 mb-6">
              <span className="bg-primary-accent text-primary-bg px-3 py-1 rounded-full text-sm font-semibold">
                {post.category}
              </span>
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 glow-text">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center space-x-1 px-3 py-1 bg-primary-accent/20 text-primary-accent text-sm rounded-full font-inter"
                >
                  <Tag className="h-3 w-3" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl md:text-4xl font-poppins font-bold mb-6 glow-text">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl md:text-3xl font-poppins font-semibold mb-4 text-primary-accent mt-12">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl md:text-2xl font-poppins font-semibold mb-3 text-primary-gray-200 mt-8">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-primary-gray-300 font-inter leading-relaxed mb-6">
                    {children}
                  </p>
                ),
                code: ({ inline, children }) => (
                  inline ? (
                    <code className="bg-primary-card px-2 py-1 rounded text-primary-accent font-mono text-sm">
                      {children}
                    </code>
                  ) : (
                    <code className="block bg-primary-card p-4 rounded-lg text-primary-gray-200 font-mono text-sm overflow-x-auto">
                      {children}
                    </code>
                  )
                ),
                pre: ({ children }) => (
                  <pre className="bg-primary-card p-4 rounded-lg overflow-x-auto mb-6 border border-primary-gray-700">
                    {children}
                  </pre>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside text-primary-gray-300 font-inter mb-6 space-y-2">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside text-primary-gray-300 font-inter mb-6 space-y-2">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-primary-gray-300 font-inter">
                    {children}
                  </li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary-accent pl-4 italic text-primary-gray-400 my-6">
                    {children}
                  </blockquote>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-accent hover:text-primary-magenta transition-colors underline"
                  >
                    {children}
                  </a>
                ),
                img: ({ src, alt }) => (
                  <img
                    src={src}
                    alt={alt}
                    className="w-full rounded-lg my-8 shadow-lg"
                  />
                )
              }}
            >
              {post.content}
            </ReactMarkdown>
          </motion.article>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-20 bg-primary-card/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card glow-border p-8"
          >
            <h3 className="text-2xl font-poppins font-semibold mb-4 glow-text">
              About the Author
            </h3>
            <div className="flex items-start space-x-4">
              <img
                src={post.author.image}
                alt={post.author.name}
                className="w-24 h-24 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h4 className="text-xl font-poppins font-semibold mb-2 text-primary-accent">
                  {post.author.name}
                </h4>
                <p className="text-primary-gray-300 font-inter leading-relaxed">
                  {post.author.bio}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 glow-text">
              More Articles
            </h2>
            <Link to="/blog" className="btn-secondary">
              View All Posts
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;