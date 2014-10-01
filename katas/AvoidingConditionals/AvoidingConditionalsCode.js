var defaults = {
    duck: {
        code: "function Book(title, quote) {\n" +
            "    this.title = title\n" +
            "    this.quote = quote\n" +
            "}\n" +
            "\n" +
            "function Magazine(issue, article) {\n" +
            "    this.issue = issue\n" +
            "    this.article = article\n" +
            "}\n" +
            "\n" +
            "function Document(file, theory) {\n" +
            "    this.file = file\n" +
            "    this.theory = theory\n" +
            "}\n" +
            "\n" +
            "function read(item) {\n" +
            "    var result = 'nothing to read'\n" +
            "    if (item.hasOwnProperty('quote'))\n" +
            "        result = item.quote\n" +
            "    else if (item.article)\n" +
            "        result = item.article\n" +
            "    else if (item instanceof Document)\n" +
            "        result = item.theory\n" +
            "    return result\n" +
            "}",
        test: "var harryPotter = new Book('Harry Potter', 'shut up ron')\n" +
            "var unix = new Magazine('November 2014', 'zshell is cool')\n" +
            "var primes = new Document('Euclids Elements', 'there are infinatly many primes')\n" +
            "describe('Duck Typing', function() {\n" +
            "    it('enjoys the novel', function() {\n" +
            "        expect(read(harryPotter)).toBe('shut up ron')\n" +
            "    })\n" +
            "\n" +
            "    it('an article on something interesting', function() {\n" +
            "        expect(read(unix)).toBe('zshell is cool')\n" +
            "    })\n" +
            "\n" +
            "    it('theory is correct', function() {\n" +
            "        expect(read(primes)).toBe('there are infinatly many primes')\n" +
            "    })\n" +
            "})"
    },
    decision: {
        code: "function movePlayer(direction) {\n" +
            "    return 'moved: ' + direction\n" +
            "}\n" +
            "\n" +
            "function describeLocation() {\n" +
            "    return 'in a room with developers coding'\n" +
            "}\n" +
            "\n" +
            "function showBackpack() {\n" +
            "    return 'nothing, just a space for a mac and its charger'\n" +
            "}\n" +
            "\n" +
            "function processUserInput(command) {\n" +
            "    var result = 'unknown command'\n" +
            "    switch (command) {\n" +
            "        case 'north':\n" +
            "            result = movePlayer('north');\n" +
            "            break;\n" +
            "        case 'look':\n" +
            "            result = describeLocation();\n" +
            "            break;\n" +
            "        case 'backpack':\n" +
            "            result = showBackpack();\n" +
            "            break;\n" +
            "    }\n" +
            "    return result\n" +
            "}",
        test: "describe('Decision Tables', function() {\n" +
            "    it('can move north', function() {\n" +
            "        expect(processUserInput('north')).toBe('moved: north')\n" +
            "    })\n" +
            "\n" +
            "    it('look around the roon', function() {\n" +
            "        expect(processUserInput('look')).toBe('in a room with developers coding')\n" +
            "    })\n" +
            "\n" +
            "    it('see what is in backpack', function() {\n" +
            "        expect(processUserInput('backpack')).toBe('nothing, just a space for a mac and its charger')\n" +
            "    })\n" +
            "})"
    }
}