class User:
    def __init__(self, paid: bool) -> None:
        self._progress = 0.0
        self._paid = paid
        self._recycled_count = 0
        self._tokens = 0

    def getRecycledCount(self) -> int:
        return self._recycled_count

    def getProgress(self) -> float:
        return self._progress

    def getPaid(self) -> bool:
        return self._paid

    def getTokens(self) -> int:
        return self._tokens

    def incrementRecycleCount(self, n=1):
        self._recycled_count += n
        if self._progress != 1:
            self._progress = n * 0.2

    def setPaid(self, paid=True):
        self._paid = paid

    def calculateTokens(self) -> int:
        if self._paid:
            self._tokens = 250 * self._progress
            return self._tokens
        else:
            return 0
