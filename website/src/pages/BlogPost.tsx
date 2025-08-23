import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Calendar, User, Clock, Tag, Share2 } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  // Sample blog posts data - in a real app, this would come from a CMS or API
  const blogPosts = {
    'welcome-to-college-youre-now-in-the-algorithm': {
      title: 'Welcome to College: You\'re Now in the Algorithm',
      author: {
        name: 'Diya Prakash',
        image: 'https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=400',
        bio: '3rd Year CSE student passionate about AI/ML and sharing honest insights about college life. Currently running on caffeine and confusion, but making it work!'
      },
      date: '1 Aug 2025',
      readTime: '5 min read',
      category: 'College Life',
      tags: ['College', 'Life', 'Freshers', 'Algorithm'],
      image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200',
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
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
        bio: 'ML enthusiast and active member of Neural Hive. Passionate about making complex AI concepts accessible to beginners. When not coding, you can find him explaining algorithms with coffee analogies.'
      },
      date: '31 Jul 2025',
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

- **Structured data:** Organized in a predefined format, typically in tables or databases with rows and columns. This includes:
  - **Tabular data:** Spreadsheets, databases, or CSV files with rows representing instances and columns representing features.
  - **Time-series data:** Sequences of values measured over time, such as stock prices, sensor readings, or weather data.

- **Unstructured data:** Lacks a predefined structure, requiring advanced techniques to extract meaningful patterns:
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
            
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-primary-gray-400 hover:text-primary-accent transition-colors">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
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
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
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