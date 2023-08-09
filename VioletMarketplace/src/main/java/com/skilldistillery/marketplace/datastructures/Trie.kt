import com.skilldistillery.marketplace.interfaces.Searchable

class TrieNode {
    var isEndOfWord: Boolean = false
    var searchable: Searchable? = null
    var children: MutableMap<Char, TrieNode> = mutableMapOf()
}

class Trie {
    val root = TrieNode()

    fun insert(word: String, searchable: Searchable) {
        var current = root
        for (ch in word) {
            current = current.children.getOrPut(ch) { TrieNode() }
        }
        current.isEndOfWord = true
        current.searchable = searchable
    }

    fun search(prefix: String): List<Searchable> {
        val result = mutableListOf<Searchable>()
        var current = root
        for (ch in prefix) {
            current = current.children[ch] ?: return emptyList()
        }
        findWordsFrom(current, prefix, result)
        return result
    }

    fun findWordsFrom(node: TrieNode, currentWord: String, result: MutableList<Searchable>) {
        node.searchable?.let { result.add(it) }
        for ((ch, child) in node.children) {
            findWordsFrom(child, currentWord + ch, result)
        }
    }
}