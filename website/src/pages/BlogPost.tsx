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
    'getting-started-with-pytorch': {
      title: 'Getting Started with PyTorch',
      author: 'Rithvik Matta',
      date: '15 Jan 2025',
      readTime: '8 min read',
      category: 'Tutorial',
      tags: ['PyTorch', 'Deep Learning', 'Neural Networks', 'Python'],
      image: 'https://images.pexels.com/photos/7661980/pexels-photo-7661980.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `
# Getting Started with PyTorch

PyTorch has become one of the most popular deep learning frameworks, and for good reason. Its dynamic computational graph and intuitive Python-first approach make it an excellent choice for both research and production.

## Why PyTorch?

PyTorch offers several advantages over other frameworks:

- **Dynamic Computation Graphs**: Unlike static graphs, PyTorch builds the graph on-the-fly, making debugging easier
- **Pythonic**: Feels natural to Python developers
- **Strong Community**: Excellent documentation and community support
- **Research-Friendly**: Easy to experiment with new architectures

## Installation

First, let's install PyTorch. Visit [pytorch.org](https://pytorch.org) to get the installation command for your system.

\`\`\`bash
# For CPU-only version
pip install torch torchvision torchaudio

# For CUDA (GPU) version
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
\`\`\`

## Your First Neural Network

Let's build a simple neural network to classify handwritten digits:

\`\`\`python
import torch
import torch.nn as nn
import torch.optim as optim
from torchvision import datasets, transforms

# Define the neural network
class SimpleNet(nn.Module):
    def __init__(self):
        super(SimpleNet, self).__init__()
        self.fc1 = nn.Linear(784, 128)
        self.fc2 = nn.Linear(128, 64)
        self.fc3 = nn.Linear(64, 10)
        self.relu = nn.ReLU()
        
    def forward(self, x):
        x = x.view(-1, 784)  # Flatten the image
        x = self.relu(self.fc1(x))
        x = self.relu(self.fc2(x))
        x = self.fc3(x)
        return x

# Create the model
model = SimpleNet()
print(model)
\`\`\`

## Loading Data

PyTorch provides convenient data loaders for common datasets:

\`\`\`python
# Data preprocessing
transform = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize((0.1307,), (0.3081,))
])

# Load MNIST dataset
train_dataset = datasets.MNIST('data', train=True, download=True, transform=transform)
test_dataset = datasets.MNIST('data', train=False, transform=transform)

train_loader = torch.utils.data.DataLoader(train_dataset, batch_size=64, shuffle=True)
test_loader = torch.utils.data.DataLoader(test_dataset, batch_size=1000, shuffle=False)
\`\`\`

## Training the Model

Here's how to train your neural network:

\`\`\`python
# Define loss function and optimizer
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Training loop
def train(model, train_loader, optimizer, criterion, epochs=5):
    model.train()
    for epoch in range(epochs):
        running_loss = 0.0
        for batch_idx, (data, target) in enumerate(train_loader):
            optimizer.zero_grad()
            output = model(data)
            loss = criterion(output, target)
            loss.backward()
            optimizer.step()
            
            running_loss += loss.item()
            if batch_idx % 100 == 0:
                print(f'Epoch {epoch+1}/{epochs}, Batch {batch_idx}, Loss: {loss.item():.4f}')

# Train the model
train(model, train_loader, optimizer, criterion)
\`\`\`

## Key Concepts

### Tensors
Tensors are the fundamental data structure in PyTorch, similar to NumPy arrays but with GPU support:

\`\`\`python
# Create tensors
x = torch.tensor([1, 2, 3])
y = torch.randn(3, 4)  # Random tensor
z = torch.zeros(2, 3)  # Zero tensor
\`\`\`

### Autograd
PyTorch's automatic differentiation system:

\`\`\`python
x = torch.tensor([2.0], requires_grad=True)
y = x ** 2
y.backward()
print(x.grad)  # Prints tensor([4.])
\`\`\`

## Best Practices

1. **Use DataLoaders**: Always use PyTorch's DataLoader for efficient data loading
2. **GPU Utilization**: Move your model and data to GPU when available
3. **Model Checkpointing**: Save your model regularly during training
4. **Validation**: Always validate your model on unseen data

## Next Steps

Now that you understand the basics, here are some next steps:

- Explore different architectures (CNNs, RNNs, Transformers)
- Learn about transfer learning
- Experiment with different optimizers and loss functions
- Try building more complex projects

## Conclusion

PyTorch provides an excellent foundation for deep learning projects. Its flexibility and ease of use make it perfect for both beginners and advanced practitioners. Start with simple projects and gradually work your way up to more complex architectures.

Happy coding! 🚀
      `
    },
    'intro-to-ctf-recon-with-bloodhound': {
      title: 'Intro to CTF Recon with BloodHound',
      author: 'Karthik Venkat',
      date: '10 Jan 2025',
      readTime: '12 min read',
      category: 'Security',
      tags: ['CTF', 'Security', 'BloodHound', 'Reconnaissance'],
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `
# Intro to CTF Recon with BloodHound

BloodHound is a powerful tool for Active Directory reconnaissance that has become essential in both red team operations and CTF competitions. This guide will walk you through the basics of using BloodHound for CTF challenges.

## What is BloodHound?

BloodHound is a single page Javascript web application that uses graph theory to reveal hidden and often unintended relationships within an Active Directory environment. It's particularly useful for:

- Finding attack paths
- Identifying privilege escalation opportunities
- Understanding domain relationships
- Visualizing complex AD structures

## Installation and Setup

### Installing BloodHound

\`\`\`bash
# Download the latest release from GitHub
wget https://github.com/BloodHoundAD/BloodHound/releases/latest

# Install Neo4j (required database)
sudo apt update
sudo apt install neo4j

# Start Neo4j service
sudo systemctl start neo4j
sudo systemctl enable neo4j
\`\`\`

### Initial Configuration

1. Access Neo4j browser at \`http://localhost:7474\`
2. Default credentials: \`neo4j:neo4j\`
3. Change the password when prompted
4. Launch BloodHound and connect to the database

## Data Collection

Before analysis, you need to collect data from the target domain.

### Using SharpHound

SharpHound is the official data collector for BloodHound:

\`\`\`powershell
# Basic collection
.\SharpHound.exe -c All

# Stealth collection (slower but less detectable)
.\SharpHound.exe -c All --stealth

# Specific collection methods
.\SharpHound.exe -c DCOnly,Group,LocalAdmin
\`\`\`

### Using BloodHound.py

For Linux environments or when you can't run executables:

\`\`\`bash
# Install bloodhound.py
pip install bloodhound

# Collect data remotely
bloodhound-python -u username -p password -ns 10.10.10.10 -d domain.local -c all
\`\`\`

## Understanding the Interface

### Main Components

1. **Graph View**: Visual representation of relationships
2. **Raw Query**: Custom Cypher queries
3. **Pre-built Queries**: Common attack scenarios
4. **Database Info**: Statistics about collected data

### Key Nodes

- **Users**: Domain user accounts
- **Groups**: Security and distribution groups
- **Computers**: Domain-joined machines
- **Domains**: Domain objects
- **GPOs**: Group Policy Objects
- **OUs**: Organizational Units

## Common CTF Scenarios

### Finding Domain Admins

\`\`\`cypher
MATCH (u:User)-[:MemberOf*1..]->(g:Group)
WHERE g.name =~ "(?i).*DOMAIN ADMINS.*"
RETURN u.name
\`\`\`

### Shortest Path to Domain Admin

Use the pre-built query "Shortest Paths to Domain Admins from Owned Principals" after marking users as owned.

### Kerberoastable Users

\`\`\`cypher
MATCH (u:User)
WHERE u.hasspn = true
RETURN u.name, u.serviceprincipalnames
\`\`\`

### ASREPRoastable Users

\`\`\`cypher
MATCH (u:User)
WHERE u.dontreqpreauth = true
RETURN u.name
\`\`\`

## Advanced Techniques

### Custom Queries

Finding users with DCSync privileges:

\`\`\`cypher
MATCH (u:User)-[:GetChanges|GetChangesAll*1..]->(d:Domain)
RETURN u.name
\`\`\`

Finding computers with unconstrained delegation:

\`\`\`cypher
MATCH (c:Computer)
WHERE c.unconstraineddelegation = true
RETURN c.name
\`\`\`

### Marking Nodes as Owned

Right-click on nodes and select "Mark User as Owned" to:
- Track your progress
- Find new attack paths
- Identify lateral movement opportunities

## CTF-Specific Tips

### 1. Start with Pre-built Queries

- "Find all Domain Admins"
- "Find Shortest Paths to Domain Admins"
- "Find Principals with DCSync Rights"

### 2. Look for Easy Wins

- Users with "Password Never Expires"
- Kerberoastable accounts
- Users with admin rights on multiple machines

### 3. Analyze Group Memberships

- Nested group memberships
- High-value groups
- Custom groups with elevated privileges

### 4. Check for Misconfigurations

- Excessive local admin rights
- Dangerous ACLs
- Overprivileged service accounts

## Common Pitfalls

### Data Collection Issues

- Insufficient privileges for complete enumeration
- Network connectivity problems
- AV/EDR detection

### Analysis Mistakes

- Not marking owned principals
- Ignoring indirect relationships
- Focusing only on obvious paths

## Practical Example

Let's walk through a typical CTF scenario:

1. **Initial Access**: You've compromised a low-privilege user
2. **Data Collection**: Run SharpHound from the compromised machine
3. **Import Data**: Load the ZIP file into BloodHound
4. **Mark Owned**: Right-click your compromised user and mark as owned
5. **Find Paths**: Use "Shortest Paths to Domain Admins from Owned Principals"
6. **Analyze Results**: Look for exploitable relationships in the path

## Defensive Considerations

Understanding BloodHound helps defenders too:

- Identify dangerous privilege escalation paths
- Reduce attack surface
- Monitor for data collection activities
- Implement proper access controls

## Conclusion

BloodHound is an invaluable tool for understanding Active Directory environments. In CTF contexts, it can quickly reveal attack paths that might take hours to discover manually. Practice with different datasets and scenarios to become proficient with its capabilities.

Remember: Always use these techniques ethically and only in authorized environments!

## Resources

- [BloodHound Documentation](https://bloodhound.readthedocs.io/)
- [SharpHound Collectors](https://github.com/BloodHoundAD/SharpHound)
- [Cypher Query Language](https://neo4j.com/developer/cypher/)
      `
    },
    'building-secure-ssl-chatroom-in-c': {
      title: 'Building a Secure SSL Chatroom in C',
      author: 'Ananya Sharma',
      date: '5 Jan 2025',
      readTime: '15 min read',
      category: 'Programming',
      tags: ['C Programming', 'SSL/TLS', 'Network Security', 'Socket Programming'],
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `
# Building a Secure SSL Chatroom in C

Creating a secure chatroom application requires understanding both network programming and cryptographic protocols. In this tutorial, we'll build a multi-client chatroom server using C with SSL/TLS encryption.

## Prerequisites

- Basic knowledge of C programming
- Understanding of socket programming
- Familiarity with SSL/TLS concepts
- Linux development environment

## Required Libraries

\`\`\`bash
# Install OpenSSL development libraries
sudo apt-get install libssl-dev

# Install pthread library (usually included)
sudo apt-get install libc6-dev
\`\`\`

## Project Structure

\`\`\`
chatroom/
├── server.c
├── client.c
├── ssl_utils.c
├── ssl_utils.h
├── Makefile
├── certs/
│   ├── server.crt
│   └── server.key
\`\`\`

## SSL Utilities Header

First, let's create our SSL utility functions:

\`\`\`c
// ssl_utils.h
#ifndef SSL_UTILS_H
#define SSL_UTILS_H

#include <openssl/ssl.h>
#include <openssl/err.h>
#include <openssl/bio.h>

#define MAX_CLIENTS 10
#define BUFFER_SIZE 1024

typedef struct {
    SSL *ssl;
    int socket;
    char username[50];
} client_t;

// Function declarations
SSL_CTX* create_server_context(void);
SSL_CTX* create_client_context(void);
void configure_server_context(SSL_CTX *ctx);
void configure_client_context(SSL_CTX *ctx);
void cleanup_openssl(void);
void init_openssl(void);

#endif
\`\`\`

## SSL Utilities Implementation

\`\`\`c
// ssl_utils.c
#include "ssl_utils.h"
#include <stdio.h>
#include <stdlib.h>

void init_openssl() {
    SSL_load_error_strings();
    OpenSSL_add_ssl_algorithms();
}

void cleanup_openssl() {
    EVP_cleanup();
}

SSL_CTX* create_server_context() {
    const SSL_METHOD *method;
    SSL_CTX *ctx;

    method = TLS_server_method();
    ctx = SSL_CTX_new(method);
    if (!ctx) {
        perror("Unable to create SSL context");
        ERR_print_errors_fp(stderr);
        exit(EXIT_FAILURE);
    }

    return ctx;
}

SSL_CTX* create_client_context() {
    const SSL_METHOD *method;
    SSL_CTX *ctx;

    method = TLS_client_method();
    ctx = SSL_CTX_new(method);
    if (!ctx) {
        perror("Unable to create SSL context");
        ERR_print_errors_fp(stderr);
        exit(EXIT_FAILURE);
    }

    return ctx;
}

void configure_server_context(SSL_CTX *ctx) {
    // Set the key and cert
    if (SSL_CTX_use_certificate_file(ctx, "certs/server.crt", SSL_FILETYPE_PEM) <= 0) {
        ERR_print_errors_fp(stderr);
        exit(EXIT_FAILURE);
    }

    if (SSL_CTX_use_PrivateKey_file(ctx, "certs/server.key", SSL_FILETYPE_PEM) <= 0) {
        ERR_print_errors_fp(stderr);
        exit(EXIT_FAILURE);
    }

    // Verify private key
    if (!SSL_CTX_check_private_key(ctx)) {
        fprintf(stderr, "Private key does not match the public certificate\\n");
        exit(EXIT_FAILURE);
    }
}

void configure_client_context(SSL_CTX *ctx) {
    // For this example, we'll skip certificate verification
    // In production, you should verify the server certificate
    SSL_CTX_set_verify(ctx, SSL_VERIFY_NONE, NULL);
}
\`\`\`

## Server Implementation

\`\`\`c
// server.c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <pthread.h>
#include "ssl_utils.h"

client_t *clients[MAX_CLIENTS];
int client_count = 0;
pthread_mutex_t clients_mutex = PTHREAD_MUTEX_INITIALIZER;

void add_client(client_t *client) {
    pthread_mutex_lock(&clients_mutex);
    for (int i = 0; i < MAX_CLIENTS; i++) {
        if (!clients[i]) {
            clients[i] = client;
            client_count++;
            break;
        }
    }
    pthread_mutex_unlock(&clients_mutex);
}

void remove_client(client_t *client) {
    pthread_mutex_lock(&clients_mutex);
    for (int i = 0; i < MAX_CLIENTS; i++) {
        if (clients[i] == client) {
            clients[i] = NULL;
            client_count--;
            break;
        }
    }
    pthread_mutex_unlock(&clients_mutex);
}

void broadcast_message(char *message, client_t *sender) {
    pthread_mutex_lock(&clients_mutex);
    for (int i = 0; i < MAX_CLIENTS; i++) {
        if (clients[i] && clients[i] != sender) {
            if (SSL_write(clients[i]->ssl, message, strlen(message)) <= 0) {
                printf("Failed to send message to client\\n");
            }
        }
    }
    pthread_mutex_unlock(&clients_mutex);
}

void* handle_client(void *arg) {
    client_t *client = (client_t*)arg;
    char buffer[BUFFER_SIZE];
    char message[BUFFER_SIZE + 100];
    int bytes_received;

    // Get username
    if (SSL_read(client->ssl, client->username, sizeof(client->username)) <= 0) {
        printf("Failed to receive username\\n");
        goto cleanup;
    }

    printf("User %s connected\\n", client->username);
    
    // Notify other clients
    snprintf(message, sizeof(message), "%s joined the chat\\n", client->username);
    broadcast_message(message, client);

    // Handle messages
    while ((bytes_received = SSL_read(client->ssl, buffer, BUFFER_SIZE - 1)) > 0) {
        buffer[bytes_received] = '\\0';
        
        if (strcmp(buffer, "/quit") == 0) {
            break;
        }
        
        snprintf(message, sizeof(message), "%s: %s", client->username, buffer);
        printf("%s", message);
        broadcast_message(message, client);
    }

cleanup:
    printf("User %s disconnected\\n", client->username);
    snprintf(message, sizeof(message), "%s left the chat\\n", client->username);
    broadcast_message(message, client);
    
    remove_client(client);
    SSL_shutdown(client->ssl);
    SSL_free(client->ssl);
    close(client->socket);
    free(client);
    
    return NULL;
}

int main() {
    int server_socket, client_socket;
    struct sockaddr_in server_addr, client_addr;
    socklen_t client_len = sizeof(client_addr);
    SSL_CTX *ctx;
    
    init_openssl();
    ctx = create_server_context();
    configure_server_context(ctx);

    // Create socket
    server_socket = socket(AF_INET, SOCK_STREAM, 0);
    if (server_socket < 0) {
        perror("Socket creation failed");
        exit(EXIT_FAILURE);
    }

    // Configure server address
    server_addr.sin_family = AF_INET;
    server_addr.sin_addr.s_addr = INADDR_ANY;
    server_addr.sin_port = htons(8443);

    // Bind socket
    if (bind(server_socket, (struct sockaddr*)&server_addr, sizeof(server_addr)) < 0) {
        perror("Bind failed");
        exit(EXIT_FAILURE);
    }

    // Listen for connections
    if (listen(server_socket, MAX_CLIENTS) < 0) {
        perror("Listen failed");
        exit(EXIT_FAILURE);
    }

    printf("SSL Chatroom Server listening on port 8443...\\n");

    while (1) {
        client_socket = accept(server_socket, (struct sockaddr*)&client_addr, &client_len);
        if (client_socket < 0) {
            perror("Accept failed");
            continue;
        }

        // Create SSL connection
        SSL *ssl = SSL_new(ctx);
        SSL_set_fd(ssl, client_socket);

        if (SSL_accept(ssl) <= 0) {
            ERR_print_errors_fp(stderr);
            SSL_free(ssl);
            close(client_socket);
            continue;
        }

        // Create client structure
        client_t *client = malloc(sizeof(client_t));
        client->ssl = ssl;
        client->socket = client_socket;
        
        add_client(client);

        // Create thread for client
        pthread_t thread_id;
        pthread_create(&thread_id, NULL, handle_client, client);
        pthread_detach(thread_id);
    }

    close(server_socket);
    SSL_CTX_free(ctx);
    cleanup_openssl();
    
    return 0;
}
\`\`\`

## Client Implementation

\`\`\`c
// client.c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <pthread.h>
#include "ssl_utils.h"

SSL *ssl;
int running = 1;

void* receive_messages(void *arg) {
    char buffer[BUFFER_SIZE];
    int bytes_received;
    
    while (running && (bytes_received = SSL_read(ssl, buffer, BUFFER_SIZE - 1)) > 0) {
        buffer[bytes_received] = '\\0';
        printf("%s", buffer);
        fflush(stdout);
    }
    
    return NULL;
}

int main() {
    int client_socket;
    struct sockaddr_in server_addr;
    SSL_CTX *ctx;
    char username[50];
    char message[BUFFER_SIZE];
    
    init_openssl();
    ctx = create_client_context();
    configure_client_context(ctx);

    // Create socket
    client_socket = socket(AF_INET, SOCK_STREAM, 0);
    if (client_socket < 0) {
        perror("Socket creation failed");
        exit(EXIT_FAILURE);
    }

    // Configure server address
    server_addr.sin_family = AF_INET;
    server_addr.sin_port = htons(8443);
    inet_pton(AF_INET, "127.0.0.1", &server_addr.sin_addr);

    // Connect to server
    if (connect(client_socket, (struct sockaddr*)&server_addr, sizeof(server_addr)) < 0) {
        perror("Connection failed");
        exit(EXIT_FAILURE);
    }

    // Create SSL connection
    ssl = SSL_new(ctx);
    SSL_set_fd(ssl, client_socket);

    if (SSL_connect(ssl) <= 0) {
        ERR_print_errors_fp(stderr);
        exit(EXIT_FAILURE);
    }

    printf("Connected to SSL Chatroom Server\\n");
    printf("Enter your username: ");
    fgets(username, sizeof(username), stdin);
    username[strcspn(username, "\\n")] = 0; // Remove newline

    // Send username to server
    SSL_write(ssl, username, strlen(username));

    printf("Welcome to the chatroom! Type '/quit' to exit.\\n");

    // Start receiving thread
    pthread_t receive_thread;
    pthread_create(&receive_thread, NULL, receive_messages, NULL);

    // Send messages
    while (running) {
        fgets(message, sizeof(message), stdin);
        
        if (strncmp(message, "/quit", 5) == 0) {
            running = 0;
            SSL_write(ssl, "/quit", 5);
            break;
        }
        
        SSL_write(ssl, message, strlen(message));
    }

    pthread_join(receive_thread, NULL);
    
    SSL_shutdown(ssl);
    SSL_free(ssl);
    close(client_socket);
    SSL_CTX_free(ctx);
    cleanup_openssl();
    
    return 0;
}
\`\`\`

## Makefile

\`\`\`makefile
CC=gcc
CFLAGS=-Wall -Wextra -std=c99 -pthread
LIBS=-lssl -lcrypto

all: server client

server: server.c ssl_utils.c
	$(CC) $(CFLAGS) -o server server.c ssl_utils.c $(LIBS)

client: client.c ssl_utils.c
	$(CC) $(CFLAGS) -o client client.c ssl_utils.c $(LIBS)

clean:
	rm -f server client

.PHONY: all clean
\`\`\`

## Generating SSL Certificates

\`\`\`bash
# Create certificates directory
mkdir certs

# Generate private key
openssl genrsa -out certs/server.key 2048

# Generate certificate
openssl req -new -x509 -key certs/server.key -out certs/server.crt -days 365
\`\`\`

## Security Considerations

### 1. Certificate Validation
In production, always validate server certificates:

\`\`\`c
SSL_CTX_set_verify(ctx, SSL_VERIFY_PEER, verify_callback);
\`\`\`

### 2. Input Validation
Always validate and sanitize user input:

\`\`\`c
// Sanitize username
for (int i = 0; username[i]; i++) {
    if (!isalnum(username[i]) && username[i] != '_') {
        username[i] = '_';
    }
}
\`\`\`

### 3. Buffer Overflow Protection
Use safe string functions:

\`\`\`c
strncpy(dest, src, sizeof(dest) - 1);
dest[sizeof(dest) - 1] = '\\0';
\`\`\`

## Building and Running

\`\`\`bash
# Compile
make

# Run server
./server

# Run client (in another terminal)
./client
\`\`\`

## Conclusion

This secure chatroom demonstrates key concepts in network programming and SSL/TLS implementation. The application provides:

- Encrypted communication using SSL/TLS
- Multi-client support with threading
- Basic chat functionality
- Proper resource cleanup

For production use, consider adding:
- User authentication
- Message persistence
- Rate limiting
- Better error handling
- Certificate validation

The complete source code provides a solid foundation for building more complex secure network applications.
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
                <span>{post.author}</span>
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
                src="https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt={post.author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="text-xl font-poppins font-semibold mb-2 text-primary-accent">
                  {post.author}
                </h4>
                <p className="text-primary-gray-300 font-inter">
                  Active member of Neural Hive, passionate about sharing knowledge and building the AI community at PESU EC.
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