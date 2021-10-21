module.exports = function() {

  function check(node, reporter) {

    let name = node.name || '';

    if (!isASCII(name)){
        reporter.report(node.id, 'Element name must be in english (ASCII only)');
    }

    let text = node.text || '';

    if (!isASCII(text)){
        reporter.report(node.id, 'Element text must be in english (ASCII only)');
    }
  }

  return { check };
};

function isASCII(str) {
    return /^[\x00-\x7F]*$/.test(str);
}


