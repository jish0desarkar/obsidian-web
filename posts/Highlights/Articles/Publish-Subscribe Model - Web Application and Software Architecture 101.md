# Publish-Subscribe Model - Web Application and Software Architecture 101

## Metadata
- Author: [[for free]]
- Full Title: Publish-Subscribe Model - Web Application and Software Architecture 101
- Category: #articles
- URL: https://www.educative.io/module/lesson/web-application-architecture-101/R8OR2QEN97O

## Highlights
- A publish-subscribe model, aka pub-sub, is a model that enables a single or multiple producers to broadcast messages to multiple consumers
- To implement the pub-sub pattern, message queues have exchanges that push the messages to the message queues based on the exchange type and the set rules. Exchanges here are just like telephone exchanges that route messages from the sender to the receiver through the infrastructure based on certain logic. There are different types of exchanges available in message queues, some of which are: direct, topic, headers, and fanout. Each exchange type has specific functionality and a use case. Different message queue technologies have different implementations of exchange types. I just brought up the commonly used exchange types in message queues. The fanout exchange will fit best for implementing a pub-sub pattern. It will push the messages to the queue and the consumers will receive the message broadcast. The relationship between the exchange and the queue is known as binding.
