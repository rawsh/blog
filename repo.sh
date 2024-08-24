#!/bin/bash

# Check if an output file name was provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <output_file>"
    exit 1
fi

output_file="$1"

# Function to process each file
process_file() {
    local file="$1"
    if [ -f "$file" ] && [ -r "$file" ]; then
        echo "Processing: $file"
        echo "<file>" >> "$output_file"
        echo "<path>$file</path>" >> "$output_file"
        echo "<text>" >> "$output_file"
        cat "$file" >> "$output_file"
        echo "</text>" >> "$output_file"
        echo "</file>" >> "$output_file"
    else
        echo "Skipping unreadable file: $file"
    fi
}

# Ensure we're in a git repository
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    echo "Error: Not in a git repository. This script requires a git repository to use git commands."
    exit 1
fi

# Clear or create the output file
> "$output_file"

# Get list of tracked files and untracked files not ignored by git
files=$(git ls-files && git ls-files --others --exclude-standard)

# Process each file
echo "$files" | while IFS= read -r file; do
    process_file "$file"
done

echo "File processing complete. Output saved to $output_file"