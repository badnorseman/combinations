/**
 * Combinations
 * 
 * Get sized combinations of elements in a set
 * 
 * Usage:
 *   combinations(set, size)
 * 
 * Parameters:
 *   set: Array of objects of any type
 *   size: Size of combinations to search for
 * 
 * Return:
 *   Array of combinations where each combination has size
 *
 */
const combinations = (set, size) => {
  const results = [];

  // There is no way to take e.g. sets of 5 elements from a set of 4.
  if (size > set.length || size <= 0) {
    return [];
  }

  // Set has only one subset with size equal length.
  if (size == set.length) {
    return [set];
  }

  // Set has n sized subsets.
  if (size == 1) {
    for (let i = 0; i < set.length; i++) {
      results.push([set[i]]);
    }
    return results;
  }

  // Algorithm description:
  // To get combinations of a set, we want to join each element
  // with all sized combinations of the other elements. The set of
  // these sized sets would be the desired result. However, as we
  // represent sets with lists, we need to take duplicates into
  // account. To avoid producing duplicates and also unnecessary
  // computing, we use the following approach: each element i
  // divides the list into three: the preceding elements, the
  // current element i, and the subsequent elements. For the first
  // element, the list of preceding elements is empty. For element i,
  // we compute the sized computations of the subsequent elements,
  // join each with the element i, and store the joined to the set of
  // computed sized combinations. We do not need to take the preceding
  // elements into account, because they have already been the i:th
  // element so they are already computed and stored. When the length
  // of the subsequent list drops below the given size, we cannot find any
  // sized combinations, hence the upper limit for the iteration:
  for (let i = 0; i < set.length - size + 1; i++) {
    // Head is a list that includes only our current element.
    const head = set.slice(i, i + 1);
    // We take smaller combinations from the subsequent elements.
    const tailCombinations = combinations(set.slice(i + 1), size - 1);
    // For each sized combination we join it with the current and store it to the set of combinations.
    for (let j = 0; j < tailCombinations.length; j++) {
      results.push(head.concat(tailCombinations[j]));
    }
  }
  return results;
};

module.exports = combinations;
