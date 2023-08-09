import com.skilldistillery.marketplace.interfaces.Searchable

class TrieNode {
    var isEndOfWord: Boolean = false
    var searchable: Searchable? = null
    var children: MutableMap<Char, TrieNode> = mutableMapOf()
}

class Trie {
    val root = TrieNode()

    fun insert(word: String, searchable: Searchable) {
        println("Inserting word: $word, type: ${searchable.type}")
        var current = root
        for (ch in word) {
            current = current.children.getOrPut(ch) { TrieNode() }
        }
        current.isEndOfWord = true
        current.searchable = searchable
    }

    fun search(prefix: String): List<Searchable> {
        println("Searching for prefix: $prefix")
        val result = mutableListOf<Searchable>()

        findWordsFrom(root, "", prefix, result, mutableSetOf())
        println("Found results: $result")
        return result
    }

    fun findWordsFrom( node: TrieNode, currentWord: String, prefix: String, result: MutableList<Searchable>, visited: MutableSet<Searchable> ) {
        println("Exploring word: $currentWord, isEndOfWord: ${node.isEndOfWord}")
        node.searchable?.let { searchable ->
            if (currentWord.contains(prefix) && visited.add(searchable)) {
                result.add(searchable)
            }
        }
        for ((ch, child) in node.children) {
            findWordsFrom(child, currentWord + ch, prefix, result, visited)
        }
    }
}