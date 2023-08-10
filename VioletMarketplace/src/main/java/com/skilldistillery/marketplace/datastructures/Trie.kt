import com.skilldistillery.marketplace.interfaces.Searchable

class TrieNode {
    var isEndOfWord: Boolean = false
    var entityReferences: MutableSet<EntityReference> = mutableSetOf()
    var children: MutableMap<Char, TrieNode> = mutableMapOf()
}
data class EntityReference(val id: Int, val type: String)

class Trie {
    val root = TrieNode()

    fun insert(word: String, id: Int, type: String) {
        var current = root
        for (ch in word) {
            current = current.children.getOrPut(ch) { TrieNode() }
        }
        current.isEndOfWord = true
        current.entityReferences.add(EntityReference(id, type))
    }

    fun search(prefix: String): Set<EntityReference> {
        println("Searching for prefix: $prefix")
        val results = mutableSetOf<EntityReference>()
        findWordsFrom(root, "", prefix, results, mutableSetOf())
        println("Found results: $results")
        return results
    }

    private fun findWordsFrom(node: TrieNode, currentWord: String, prefix: String, result: MutableSet<EntityReference>, visited: MutableSet<EntityReference> ) {
        println("Match found for prefix: $prefix in word: $currentWord, references: ${node.entityReferences}")
        if (currentWord.startsWith(prefix)) {
            node.entityReferences.forEach { reference ->
                if (visited.add(reference)) {
                    result.add(reference)
                }
            }
        }
        for ((ch, child) in node.children) {
            findWordsFrom(child, currentWord + ch, prefix, result, visited)
        }
    }
}