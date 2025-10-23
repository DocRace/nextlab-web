/**
 * Formats a name to show the surname in uppercase
 * Example: "Zhang Kejun" -> "ZHANG Kejun"
 * Example: "Li Xiaobai" -> "LI Xiaobai"
 */
export function formatNameWithUppercaseSurname(name: string): string {
  if (!name || typeof name !== 'string') {
    return name;
  }

  // Split the name by spaces
  const nameParts = name.trim().split(/\s+/);
  
  if (nameParts.length === 0) {
    return name;
  }

  // If there's only one part, return it as is
  if (nameParts.length === 1) {
    return nameParts[0].toUpperCase();
  }

  // First part (surname) should be uppercase, rest should be title case
  const surname = nameParts[0].toUpperCase();
  const givenNames = nameParts.slice(1).map(part => 
    part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
  );

  return [surname, ...givenNames].join(' ');
}

/**
 * Formats both Chinese and English names consistently
 * For Chinese names, returns the name as is
 * For English names, applies uppercase surname formatting only for mainland Chinese students
 * Non-mainland students (like Jocelyn Jenica Jaya) keep their original format
 */
export function formatDisplayName(chineseName: string, englishName?: string): string {
  if (englishName) {
    // Check if this is a non-mainland student by looking for specific patterns
    // Non-mainland students have names like "Jocelyn Jenica Jaya" (standard English names)
    // Mainland Chinese students have names like "Chen Xiaohui", "Wang Jiaming", etc.
    const isNonMainlandStudent = /^[A-Z][a-z]+ [A-Z][a-z]+ [A-Z][a-z]+$/.test(englishName) && 
                                 !/^[A-Z][a-z]+ [A-Z][a-z]+ [A-Z][a-z]+$/.test(englishName.replace(/[A-Z]/g, 'A').replace(/[a-z]/g, 'a'));
    
    // More specific check: if it contains typical English names like "Jocelyn", "Jenica", "Jaya"
    const hasEnglishNamePattern = /^(Jocelyn|Jenica|Jaya|Kevin|David|Michael|Sarah|Emma|James|William|Robert|John|Mary|Patricia|Jennifer|Linda|Elizabeth|Barbara|Susan|Jessica|Sarah|Karen|Nancy|Lisa|Betty|Helen|Sandra|Donna|Carol|Ruth|Sharon|Michelle|Laura|Sarah|Kimberly|Deborah|Dorothy|Lisa|Nancy|Karen|Betty|Helen|Sandra|Donna|Carol|Ruth|Sharon|Michelle|Laura|Sarah|Kimberly|Deborah|Dorothy)/i.test(englishName);
    
    if (hasEnglishNamePattern) {
      // Keep original format for non-mainland students with English names
      return englishName;
    } else {
      // Apply uppercase surname formatting for mainland Chinese students
      return formatNameWithUppercaseSurname(englishName);
    }
  }
  return chineseName;
}
