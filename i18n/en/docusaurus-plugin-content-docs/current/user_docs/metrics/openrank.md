# OpenRank Algorithm

The OpenRank algorithm is an open source evaluation series algorithm proposed by the X-lab laboratory. This series of algorithms serves as the standard open source implementation for project evaluation and developer contribution assessment in the network evaluation model of the "Information Technology Open Source Governance" series standards by the Ministry of Industry and Information Technology Standardization Institute [《Information Technology Open Source Governance》](https://www.ttbz.org.cn/Home/Standard?searchType=3&key=%E5%BC%80%E6%BA%90%E6%B2%BB%E7%90%86).

## PageRank Algorithm

<div style={{'text-align':'center'}}>
  <img src="/img/pagerank.svg" alt="PageRank" width="300px" />
</div>

The PageRank algorithm was proposed in 1998 by Google founders Larry Page and Sergey Brin as a network centrality assessment algorithm. Its advantage is that the quality of web pages can be evaluated without focusing on the specific content of the pages, but rather by analyzing the reference relationships between the pages combined with the PageRank network algorithm. The fundamental proposition of PageRank is that high-quality web pages are referenced by more pages, and high-quality pages tend to reference other high-quality pages, meaning the reference relationships between pages represent the value recognition of each page's developer or owner towards the referenced pages. The introduction of PageRank revolutionized the previous search engine methodologies, which were based on search keyword relevance and web page content analysis, significantly reducing analysis costs while effectively enhancing the quality of search results.

## OpenRank Algorithm

Inspired by PageRank, OpenRank has been optimized and expanded upon, allowing the network algorithm to introduce initial values as inherent attributes for nodes and supporting the extension of nodes' centrality to higher-dimensional spaces.

The introduction of initial values for nodes allows, in practical applications, for the centrality of nodes to inherit historical data, thus maintaining good temporal continuity which has a great supports for the data insight.

OpenRank in open source is composed of two sub-algorithms: [Global OpenRank Influence Algorithm](global_openrank) and [Community OpenRank Contribution Algorithm](community_openrank).

## Value Proposition of OpenRank

- OpenRank aims to explore the flow of value in social collaborative networks, delving deep into collaborative relationships while also supporting continuous optimization of algorithm details through scientific results, thereby offering better applicability.
- OpenRank was introduced to address the widespread observer effect in statistical indicators, such as the alienation behavior and community damage caused by metrics like the number of stars and contributors in open source projects.
- The OpenRank algorithm solidifies community institutional design in algorithmic form, integrating measurement with behavioral impact, guiding developers towards healthy, long-term collaboration through algorithmic metrics.
