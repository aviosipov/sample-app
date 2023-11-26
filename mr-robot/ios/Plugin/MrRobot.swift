import Foundation

@objc public class MrRobot: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
