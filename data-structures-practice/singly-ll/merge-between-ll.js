var mergeInBetween = function (list1, a, b, list2) {
  let start = null;
  let end = list1;

  for (let i = 0; i < b; ++i) {
    if (i == a - 1) {
      start = end;
    }
    end = end.next;
  }

  start.next = list2;

  while (list2.next != null) {
    list2 = list2.next;
  }

  list2.next = end.next;
  end.next = null;
  return list1;
};
