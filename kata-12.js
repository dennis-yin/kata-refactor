const camelCase = function(input) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] == ' ') {
      result += input[i+1].toUpperCase();
      i++;
    } else {
      result += input[i];
    }
  }
  return result;
}

const pascalCase = function(input) {
  let result = "";
  result += input[0].toUpperCase();
  for (let i = 1; i < input.length; i++) {
    if (input[i] == ' ') {
      result += input[i+1].toUpperCase();
      i++;
    } else {
      result += input[i];
    }
  }
  return result;
}

const snakeCase = function(input) {
  let result = "";
  input = input.replace(/ /g, '_');   // / /g replaces all spaces, not just first occurence
  result += input;
  return result;
}

const kebabCase = function(input) {
  let result = "";
  input = input.replace(/ /g, '-');
  result = result.concat(input);
  return result;
}

const titleCase = function(input) {
  result = input[0].toUpperCase();
  for (let i = 1; i < input.length; i++) {
    if (input[i] == ' ') {
      result += (' ' + input[i+1].toUpperCase());
      i++;
    } else {
      result += input[i];
    }
  }
  return result;
}

const vowelCase = function(input) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    if (vowels.includes(input[i])) {
      result += input[i].toUpperCase();
    } else {
      result += input[i];
    }
  }
}

const consonantCase = function(input) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    if (!vowels.includes(input[i])) {
      result += input[i].toUpperCase();
    } else {
      result += input[i];
    }
  }
}

const upperCase = function(input) {
  return input.toUpperCase();
}

const lowerCase = function(input) {
  return input.toLowerCase();
}

const makeCase = function(input, caseStyle) {
  const tierOne = ['camel', 'pascal', 'snake', 'kebab', 'title'];
  const tierTwo = ['vowel', 'consonant'];
  // const tierThree = ['upper', 'lower'];
  let result = '';
  let caseToUse = caseStyle;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let multipleCases = false;

  // Assumes the array caseStyle contains two values at most
  if (Array.isArray(caseStyle)) {
    multipleCases = true;
    if (tierOne.includes(caseStyle[0]) || tierOne.includes(caseStyle[1])) {
      if (tierOne.includes(caseStyle[0])) {
        input = makeCase(input, caseStyle[0]);
        caseToUse = caseStyle[1];
      } else {
        input = makeCase(input, caseStyle[1]);
        caseToUse = caseStyle[0];
      }
    } else if (tierTwo.includes(caseStyle[0] || tierTwo.includes(caseStyle[1]))) {
      if (tierTwo.includes(caseStyle[0])) {
        input = makeCase(input, caseStyle[0]);
        caseToUse = caseStyle[1];
      } else {
        input = makeCase(input, caseStyle[1]);
        caseToUse = caseStyle[0];
      }
    }
  }

  switch (caseToUse) {

    case 'camel':
      result = camelCase(input);
      break;

    case 'pascal':
      result = pascalCase(input);
      break;

    case 'snake':
      result = snakeCase(input);
      break;

    case 'kebab':
      result = kebabCase(input);
      break;

    case 'title':
      result = titleCase(input);
      break;

    case 'vowel':
      result = vowelCase(input);
      break;

    case 'consonant':
      result = consonantCase(input);
      break;

    case 'upper':
      result = upperCase(input);
      break;

    case 'lower':
      result = lowerCase(input);
      break;

  }

  return result;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));