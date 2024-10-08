function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;

    // Helper function to perform DFS
    function dfs(r, c) {
        // Check for out-of-bounds or water
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') {
            return;
        }

        // Mark the land as visited
        grid[r][c] = 'W';

        // Explore all four directions (up, down, left, right)
        dfs(r + 1, c); // down
        dfs(r - 1, c); // up
        dfs(r, c + 1); // right
        dfs(r, c - 1); // left
    }

    // Iterate through each cell in the grid
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 'L') {
                islandCount++; // Found a new island
                dfs(i, j); // Explore the entire island
            }
        }
    }

    return islandCount;
}

// Test cases
const dispatch1 = [
    ["L","L","L","L","W"],
    ["L","L","W","L","W"],
    ["L","L","W","W","W"],
    ["W","W","W","W","W"]
];

const dispatch2 = [
    ["L","L","W","W","W"],
    ["L","L","W","W","W"],
    ["W","W","L","W","W"],
    ["W","W","W","L","L"]
];

console.log(numIslands(dispatch1)); // Output: 1
console.log(numIslands(dispatch2)); // Output: 3



